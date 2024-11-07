import { toast } from 'react-toastify';
import {useState } from "react";
import { Container, Label, Input, ButtonStled, LabelUpload, ErrorMessage } from "./newCategory-styler";
import api from '../../../services/api';
import { useForm } from "react-hook-form";
import { ImageUp } from 'lucide-react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';

export default function NewCategory() {
  const [fileName, setFileName] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!file) {
      toast.error('Carregue uma imagem para a categoria');
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
      formData.append('file', file);

      await toast.promise(
        api.post('categories', formData),
        {
          pending: 'Criando nova categoria...',
          success: 'Categoria criada com sucesso',
          error: (error) => {
            const message = error.response?.data?.message || 'Erro ao criar a categoria';
            return message;
          }
        }
      );

      setTimeout(() => {
        navigate('/nova-categoria');
      }, 2000);
    } catch (error) {
      toast.error(error.message || 'Erro ao criar a categoria');
      console.error('Erro ao criar a categoria', error);
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
          <LabelUpload>
            {fileName ? fileName : <><ImageUp style={{ marginRight: '8px' }} /> Carregar imagem da categoria</>}
            <input type="file" accept="image/png, image/jpeg" onChange={event => {
              setFile(event.target.files[0]);
              setFileName(event.target.files[0]?.name);
            }} />
          </LabelUpload>
          {errors.file && <ErrorMessage>{errors.file.message}</ErrorMessage>}
        </div>

        <ButtonStled type="submit">Adicionar categoria</ButtonStled>
      </form>
    </Container>
  );
}
