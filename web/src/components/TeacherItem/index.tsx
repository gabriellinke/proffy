import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

import './styles.css';

export interface Teacher
{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name:string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps
{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) =>
{
    function createNewConnection()
    {
        api.post('connections', { user_id: teacher.id })
    }

    return (
        <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt="Imagem perfil"/>
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>
                <p>{teacher.bio}</p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ {teacher.cost}</strong>
                    </p>
                    <a target="blank" href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection}>
                        <img src={whatsAppIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </a>
                </footer>
            </article>
    );
}

export default TeacherItem;