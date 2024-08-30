import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStled, LabelUpload, ErrorMessage } from "./newProducts-styler";
import api from '../../../services/api';
import ReactSelect from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { ImageUp } from 'lucide-react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';

export default function NewProducts() {
  const [fileName, setFileName] = useState(null);
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    price: Yup.number().required('O preço é obrigatório').typeError('O preço deve ser um número'),
    category: Yup.object().required('A categoria é obrigatória'),
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data.map(category => ({ value: category.id, label: category.name })));
    }
    loadCategories();
  }, []);

  const onSubmit = async (data) => {
    if (!file) {
      toast.error('Carregue um arquivo');
      return;
    }

    if (file.size > 2000000) {
      toast.error('Carregue arquivos de até 2MB');
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      toast.error('Carregue apenas arquivos JPEG, PNG');
      return;
    }

    try {
  
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('file', file);
      formData.append('category_id', data.category.value);

      await toast.promise(
        api.post('products', formData),
        {
          pending: 'Criando novo produto...',
          success: 'Produto criado com sucesso',
          error: (error) => {
            const message = error.response?.data?.message || 'Erro ao criar o produto';
            return message;
          }
        }
      );

      setTimeout(() => {
        navigate('/listar-produtos');
      }, 2000);
    } catch (error) {
      toast.error(error.message || 'Erro ao criar o produto');
      console.error('Erro ao criar o produto', error);
    }
  };

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
            <input type="file" accept="image/png, image/jpeg" onChange={event => {
              console.log('Arquivo selecionado:', event.target.files[0]);
              setFile(event.target.files[0]);
              setFileName(event.target.files[0]?.name);
            }} />
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

        <ButtonStled type="submit">Adicionar produto</ButtonStled>
      </form>
    </Container>
  );
}