import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem = () =>
{
    return (
        <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/51447706?s=460&u=e9cf1f615a2bc2cdd987aa145c751578ff944477&v=4" alt="Imagem perfil"/>
                    <div>
                        <strong>Gabriel Henrique Linke</strong>
                        <span>Geometria Analítica e Álgebra Linear</span>
                    </div>
                </header>
                <p>
                Álgebra linear é um ramo da matemática que surgiu do estudo detalhado de sistemas de equações lineares, sejam elas algébricas ou diferenciais. A álgebra linear utiliza alguns conceitos e estruturas fundamentais da matemática como vetores, espaços vetoriais, transformações lineares, sistemas de equações lineares e matrizes.
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button>
                        <img src={whatsAppIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    );
}

export default TeacherItem;