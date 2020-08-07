import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

function TeacherList()
{
    const [subject, setSubject] = useState("");
    const [week_day, setWeek_day] = useState("");
    const [time, setTime] = useState("");
    const [teachers, setTeachers] = useState<Teacher[]>([])

    function searchTeachers(e: FormEvent)
    {
        e.preventDefault();
        api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })
            .then(response => {
                setTeachers(response.data);
            })
    }

    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
                        options={[
                            { value: "Cálculo", label: "Cálculo" },
                            { value: "Equações Diferenciais", label: "Equações Diferenciais" },
                            { value: "Geometria Analítica e Algebra Linear", label: "Geometria Analítica e Algebra Linear" },
                            { value: "Física", label: "Física" },
                            { value: "Química", label: "Química" },
                            { value: "Fundamentos da Programção", label: "Fundamentos da Programção" },
                            { value: "Lógica para programação", label: "Lógica para programação" },
                            { value: "Circuitos", label: "Circuitos" },
                        ]}
                    />
                    <Select 
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => { setWeek_day(e.target.value) }}
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" },
                        ]}
                    />
                    <Input name="time" label="Hora" type="time" value={time} onChange={e => { setTime(e.target.value) }}/>

                    <button type="submit">
                        <span> <FiSearch size={23}/> </span>
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map(teacher => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    );
}

export default TeacherList;