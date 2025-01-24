import canvas from '../img/Canvas.jpg'
import hadidja from '../img/Hadidja.jpg'
import gb from '../img/gb.jpg'
import html from '../img/skills/htmlcss.png'
import node from '../img/skills/nodejs.png'
import react from '../img/skills/react.png'
import go from '../img/skills/go.png'
import sql from '../img/skills/sql.png'
import docker from "../img/skills/docker.svg"
import python from "../img/skills/python.png"
import kubernetes from "../img/skills/kubernetes.svg"
import microservices from "../img/skills/microservices.png"

import canvasD from '../img/canvasPage.png'
import canvasM from '../img/canvasMobile.png'
import hadidjaD from '../img/hadidjaPage.png'
import hadidjaM from '../img/hadidjaMobile.png'
import { dataType, InitTypeBrowser } from '../types/types'


export const DataEng: dataType = {
    order: "Eng",
    linksTitle: {
        t1: 'Link to the deployed version',
        t2: 'Repository link',
    },
    main: {
        title: '👋',
        about: '✨ About Me',
        descr: "I am a passionate software developer with a strong focus on creating innovative solutions. Since 2017, I have been actively engaged in software development and maintenance, working on various projects that have enriched my experience and skills."
    },
    header: {
        name: "Michael Okhtov"
    },
    links: {
        cv: 'CV',
        projects: "Projects",
        contacts: "📫 Contacts"
    },
    footer: {
        phone: "Call me",
        email: 'Email',
        writeMe: "Text me"
    },
    cv: {
        title: 'Curriculum Vitae',
        cv: [
            {
                about: '2017 - Present',
                descr: 'Developed comprehensive ecosystems for managing customer data, enhancing client interactions. Worked with CRM systems, databases, web applications, mobile applications, satellite data, fire safety software, and emergency notification systems. Currently studying prompt engineering and working with GPT models for effective queries.'
            },
            {
                about: '20.07.2016 - 26.06.2021',
                descr: "Bachelor's Degree in Applied Informatics. 1000924 5276007",
                aboutTwo: '23.07.2011 - 25.06.2015',
                descrTwo: 'Diploma in Information Systems (by Industry). Qualification, Information Systems Technician. 110904 0000091.'
            }
        ],
        skills: {
            skill: [
                {
                    img: react,
                    descr: 'Proficient in creating fast and adaptive user interfaces using the React library. Application of best practices for writing clean and maintainable code, including unit testing to enhance the reliability of key components.'
                },
                {
                    img: node,
                    descr: "Expertise in developing server-side applications using Node.js. Creation of high-performance RESTful APIs for data transmission over HTTP and WebSocket, as well as integration with MySQL and MongoDB databases. Utilization of asynchronous programming to optimize performance and scalability of applications."
                },
                {
                    img: python,
                    descr: "Utilization of Python for task automation and scripting, enhancing workflow efficiency and simplifying routine operations."
                },
                {
                    img: go, 
                    descr: "Development of high-performance and scalable applications using the Go programming language, enabling the creation of effective solutions for complex challenges."
                },
                {
                    img: sql,
                    descr: "Experience with SQL for database management and optimization, including schema design and writing complex queries for data retrieval."
                },
                {
                    img: docker,
                    descr: "Application of Docker for containerizing applications, ensuring stability and portability of environments, while simplifying deployment processes."
                },
                {
                    img: kubernetes,
                    descr: "Knowledge in Kubernetes for orchestrating containerized applications, including management of deployments and scaling, contributing to the reliability and availability of services."
                },
                {
                    img: microservices,
                    descr: "Experience in developing applications using microservices architecture, including interactions via HTTP and gRPC, allowing for the creation of flexible and scalable solutions that adapt to changing business requirements."
                }
            ]            
        }
    },
    
    contacts: {
        title: "Contacts",
        valid: "The field cannot be empty",
        mailValid: "Invalid mail format",
        submit: 'The message has been sent',
        lebals: {
            name: 'Name',
            email: '*Email',
            message: 'Message',
            submit: 'submit'
        }
    },

    projects: {
        title: 'Projects',
        projects: [
            {
                title: 'GitHub',
                linkRep: {
                    title: 'GitHub profile link', 
                    href: 'https://github.com/okmic'
                },
                img: gb,
                descr: 'Since the vast majority of my projects are private, I am not allowed to show them publicly. But I have posted all my public projects and templates on the GitHub web service, where you can see how I write code!'
            },

        ]
    },
    
}
export const DataRu: dataType = {
    order: "Ru",
    linksTitle: {
        t1: 'Ссылка на развернутую версию',
        t2: 'Ссылка на репозиторий',
    },
    main: {
        title: '👋',
        about: '✨ Обо мне',
        descr: "Я увлеченный разработчик программного обеспечения с сильным акцентом на создание инновационных решений. С 2017 года я активно занимаюсь разработкой и поддержкой программного обеспечения, работая над различными проектами, которые обогатили мой опыт и навыки."
    },
    header: {
        name: "Михаил Охтов"
    },
    links: {
        cv: 'Резюме',
        projects: "Проекты",
        contacts: "Контакты"
    },
    footer: {
        phone: "Позвоните мне",
        email: 'Электронная почта',
        writeMe: "Напишите мне"
    },
    cv: {
        title: 'Резюме',
        cv: [
            {
                about: '2017 - Настоящее время',
                descr: 'Разработал комплексные экосистемы для управления данными клиентов, улучшая взаимодействие с клиентами. Работал с CRM-системами, базами данных, веб-приложениями, мобильными приложениями, спутниковыми данными, программным обеспечением для обеспечения пожарной безопасности и системами экстренного уведомления. В настоящее время изучаю инженерное проектирование запросов и работаю с моделями GPT для эффективных запросов.'
            },
            {
                about: '20.07.2016 - 26.06.2021',
                descr: "Степень бакалавра в области прикладной информатики.",
                aboutTwo: '23.07.2011 - 25.06.2015',
                descrTwo: 'Диплом в области информационных систем (по отраслям). Квалификация: техник информационных систем.'
            }
        ],
        skills: {
            skill: [
                {
                    img: react,
                    descr: 'Опыт создания быстрых и адаптивных пользовательских интерфейсов с использованием библиотеки React. Применение лучших практик написания чистого и поддерживаемого кода, включая модульное тестирование для повышения надежности ключевых компонентов.'
                },
                {
                    img: node,
                    descr: "Экспертный опыт в разработке серверных приложений с использованием Node.js. Создание высокопроизводительных RESTful API для передачи данных по HTTP и WebSocket, а также интеграция с базами данных MySQL и MongoDB. Применение асинхронного программирования для оптимизации производительности и масштабируемости приложений."
                },
                {
                    img: python,
                    descr: "Использование Python для автоматизации задач и написания скриптов, что повышает эффективность рабочих процессов и упрощает рутинные операции."
                },
                {
                    img: go, 
                    descr: "Разработка высокопроизводительных и масштабируемых приложений с использованием языка Go, что позволяет создавать эффективные решения для сложных задач."
                },
                {
                    img: sql,
                    descr: "Опыт работы с SQL для управления и оптимизации баз данных, включая проектирование схем и написание сложных запросов для извлечения данных."
                },
                {
                    img: docker,
                    descr: "Применение Docker для контейнеризации приложений, что обеспечивает стабильность и переносимость окружений, а также упрощает процессы развертывания."
                },
                {
                    img: kubernetes,
                    descr: "Знания в области Kubernetes для оркестрации контейнеризированных приложений, включая управление развертыванием и масштабированием, что способствует надежности и доступности сервисов."
                },
                {
                    img: microservices,
                    descr: "Опыт разработки приложений с использованием архитектуры микросервисов, включая взаимодействие через HTTP и gRPC, что позволяет создавать гибкие и масштабируемые решения, адаптирующиеся к изменениям в бизнес-требованиях."
                }
            ]
            
        }
    },
    projects: {
        title: '',
        projects: [
            {
                title: 'GitHub',
                linkRep: {
                    title: 'Ссылка на профиль GitHub', 
                    href: 'https://github.com/okmic'
                },
                img: gb,
                descr: 'Поскольку подавляющее большинство моих проектов являются частными, мне не разрешается показывать их публично. Но я разместил все свои публичные проекты и шаблоны на веб-сервисе GitHub, где вы можете увидеть, как я пишу код!'
            },

        ]
    },
    contacts: {
        title: "Контакты",
        valid: "Поле не может быть пустым",
        mailValid: "Неверный формат электронной почты",
        submit: 'Сообщение отправлено',
        lebals: {
            name: 'Имя',
            email: '*Электронная почта',
            message: 'Сообщение',
            submit: 'Отправить'
        }
    }
    
}
export const BrowserInitialState: InitTypeBrowser = {
    links: {
        deployed: {
            href: null,
            title: null
        },
        repository: {
            href: null,
            title: null
        }
    },
    images: {
        desktopImg: null,
        mobileImg: null,
        name: ''
    },
    mainScreen: [
        {img: canvas, desktop: canvasD, mobile: canvasM, name: "Canvas", type: "Fine Art Canvas"},
        {img: hadidja, desktop: hadidjaD, mobile: hadidjaM, name: "hadidja-sweets", type: 'Hadidja Sweets'},
        {img: gb, link: 'https://github.com/okmic', desktop: null, mobile: null, name: "", type: 'GitHub' }
    ]
} 