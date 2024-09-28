import styled from "styled-components";
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
`

export const Img = styled.img`
    width: 100px;
    border-radius: 5px;;
`

export const PencilImg = styled(Pencil)`
   cursor: pointer;
   color: '#323d5d';
   margin-right: 5px;
`;

export const Trash = styled(Trash2)`
   cursor: pointer;
   color: '#323d5d';
   margin-left: 5px;
`;

