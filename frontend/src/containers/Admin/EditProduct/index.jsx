import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStled, LabelUpload, ErrorMessage, ContainerInput } from "./editProduct-styler";
import api from '../../../services/api';
import ReactSelect from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { ImageUp } from 'lucide-react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export default function EditProduct() {

  const { id } = useParams();
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    price: Yup.number().required('O preço é obrigatório').typeError('O preço deve ser um número'),
    category: Yup.object().required('A categoria é obrigatória'),
    offer: Yup.bool()
  });

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      price: '',
      category: null,
      file: null
    }
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('category_id', data.category.value);
    formData.append('offer', data.offer);

    // Verifica se há um arquivo e o anexa ao formData
    if (data.file && data.file.length > 0) {
      formData.append('file', data.file[0]);
    }

    await toast.promise(
      api.put(`products/${product.id}`, formData),
      {
        pending: 'Editando produto...',
        success: 'Produto editado com sucesso',
        error: (error) => {
          const message = error.response?.data?.message || 'Erro ao editar o produto';
          return message;
        }
      }
    );

    // Carregar o produto atualizado
    try {
      const { data: updatedProduct } = await api.get(`products/${product.id}`);
      setProduct(updatedProduct);
    } catch (error) {
      console.error('Erro ao buscar o produto atualizado:', error);
    }

    setTimeout(() => {
      navigate('/listar-produtos');
    }, 2000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data.map(category => ({ value: category.id, label: category.name })));
    }

    async function loadProduct() {
      if (!product) {
        const { data } = await api.get(`products/${id}`);
        setProduct(data);
        reset({
          name: data.name,
          price: data.price,
          category: data.category ? { value: data.category.id, label: data.category.name } : null,
          file: null
        });
      } else {
        reset({
          name: product.name,
          price: product.price,
          category: product.category ? { value: product.category.id, label: product.category.name } : null,
          file: null
        });
      }
    }

    loadCategories();
    loadProduct();
  }, [id, reset, product]);

  if (!product) return <p>Carregando...</p>;

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        </div>

        <div>
          <LabelUpload>
            {fileName ? fileName : <><ImageUp style={{ marginRight: '8px' }} /> Carregar imagem do produto</>}
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={event => {
                const file = event.target.files[0];
                setFileName(file?.name);
                reset((prevValues) => ({
                  ...prevValues,
                  file: [file]
                }));
              }}
            />
          </LabelUpload>
          {errors.file && <ErrorMessage>{errors.file.message}</ErrorMessage>}
        </div>

        <div>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => <ReactSelect {...field} options={categories} placeholder="Categorias" />}
          />
          {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
        </div>

        <ContainerInput>
          <input type="checkbox" {...register("offer")} defaultChecked={product.offer} />
          <Label>Produto em oferta?</Label>
        </ContainerInput>

        <ButtonStled type="submit">Atualizar produto</ButtonStled>
      </form>
    </Container>
  );
}
