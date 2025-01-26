import canvas from '../img/Canvas.jpg'
import hadidja from '../img/Hadidja.jpg'
import gb from '../img/gb.jpg'
import node from '../img/skills/nodejs.png'
import react from '../img/skills/react.png'
import go from '../img/skills/go.png'
import unix from '../img/skills/unix.png'
import docker from "../img/skills/docker.png"
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
        descr: "Development is not just a job; it’s an opportunity to create solutions that transform everyday life. Since 2017, I have been working in software development, exploring various technologies and approaches. Each project opens new horizons for learning and creative thinking. These challenges inspire me to grow and evolve, and I strive to ensure that my work brings real value to users and society."
    },
    header: {
        name: "Michael Okhtov"
    },
    links: {
        cv: 'CV',
        projects: "Projects",
        contacts: "Contacts"
    },
    footer: {
        phone: "Call me",
        email: 'Email',
        writeMe: "Text me"
    },
    cv: {
        "title": "Experience and Education",
        "cv": [
            {
                "about": "*20.07.2016 - 26.06.2021*",
                "descr": "Bachelor's degree in Applied Informatics. Diploma in Information Systems."
            },
            {
                "about": "*23.07.2011 - 25.06.2015*",
                "descr": "Vocational education. Diploma in Information Systems. Qualification: Information Systems Technician."
            },
            {
                "about": "*2019 - 2021*",
                "descr": "North Caucasus State Academy (SKGA) - Automation of internal processes using Python and Node.js, training employees and students in relational database management, and enhancing qualifications in working with local, secure networks."
            },
            {
                "about": "*2022 - Present*",
                "descr": "ConvertMe - Working in an organization focused on digital technologies, developing high-performance, scalable applications on a microservices architecture."
            },
            {
                "about": "Outsourcing Development",
                "descr": "40+ outsourcing projects completed in various fields. Active participation in open-source projects on GitHub and involvement in numerous hackathons."
            }
        ],
        skills: {
            "title": "Technical Stack",
            "skill": [
                {
                    img: react,
                    descr: "Experience in creating fast and responsive user interfaces using the React library. Aiming to improve skills in writing clean and maintainable code, including studying best practices and modular testing to enhance the reliability of components."
                },
                {
                    img: node,
                    descr: "Expert experience in developing server-side applications using Node.js. Creating high-performance RESTful APIs for data transmission over HTTP and WebSocket, as well as working with relational databases and document-oriented databases using ORM."
                },
                {
                    img: python,
                    descr: "Using Python for task automation and scripting, which increases workflow efficiency and simplifies routine operations. Aiming to develop skills in this area."
                },
                {
                    img: go,
                    descr: "Developing high-performance and scalable applications using the Go programming language, allowing for the creation of efficient solutions for complex tasks."
                },
                {
                    img: unix,
                    descr: "Good understanding of Unix-like systems, including command line usage, file and process management, as well as writing scripts for task automation."
                },
                {
                    img: docker,
                    descr: "Applying Docker for containerizing applications, ensuring stability and portability of environments, and simplifying deployment processes."
                },
                {
                    img: kubernetes,
                    descr: "Knowledge of Kubernetes for orchestrating containerized applications, including deployment management and scaling, contributing to the reliability and availability of services."
                },
                {
                    img: microservices,
                    descr: "Experience in developing applications using microservices architecture, including interaction via HTTP and gRPC, allowing for the creation of flexible and scalable solutions that adapt to changing business requirements."
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
        title: '',
        projects: [
            {
                title: 'GitHub',
                linkRep: {
                    title: 'GitHub profile link',
                    href: 'https://github.com/okmic'
                },
                img: gb,
                descr: 'While most of my projects are private, you can check out my GitHub profile, where I share open projects and templates. If you`re interested, you can see what I`ve been working on and how I`m developing as a programmer.'
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
        descr: "Разработка — это не просто работа, а шанс создавать решения, которые меняют повседневную жизнь. С 2017 года я занимаюсь программным обеспечением, исследуя различные технологии и подходы. Каждый проект открывает новые горизонты для обучения и нестандартного мышления. Эти вызовы вдохновляют меня расти и развиваться, и я стремлюсь, чтобы мои разработки приносили реальную пользу пользователям и обществу."
    },
    header: {
        name: "Михаил Охтов"
    },
    links: {
        cv: 'Опыт',
        projects: "Проекты",
        contacts: "Контакты"
    },
    footer: {
        phone: "Позвоните мне",
        email: 'Электронная почта',
        writeMe: "Напишите мне"
    },
    cv: {
        title: "Опыт и образование",
        cv: [
            {
                "about": "*20.07.2016 - 26.06.2021*",
                "descr": "Степень бакалавра в области прикладной информатики. Диплом в области информационных систем."
            },
            {
                "about": "*23.07.2011 - 25.06.2015*",
                "descr": "Среднее профессиональное образование. Диплом в области информационных систем. Квалификация: техник информационных систем."
            },
            {
                "about": "*2019 - 2021*",
                "descr": "Северо-Кавказская государственная академия (СКГА) - Автоматизация внутренних процессов с использованием Python и Node.js, обучение сотрудников и студентов работе с реляционными базами данных, а также повышение квалификации в сфере работы с локальными, защищёнными сетями."
            },
            {
                "about": "*2022 - Настоящее время*",
                "descr": "ConvertMe - Работа в организации, занимающейся цифровыми технологиями, разработка высокопроизводительных, масштабируемых приложений на микросервисной архитектуре."
            },
            {
                "about": "Аутсорс-разработка",
                "descr": "40+ аутсорс-проектов, выполненных в различных областях. Активное участие в открытых проектах на GitHub и участие в многочисленных хакатонах."
            }
        ],
        skills: {
            "title": "Технический стек",
            "skill": [
                {
                    img: react,
                    descr: "Опыт создания быстрых и адаптивных пользовательских интерфейсов с использованием библиотеки React. Стремление к улучшению навыков написания чистого и поддерживаемого кода, включая изучение лучших практик и модульного тестирования для повышения надежности компонентов."
                },
                {
                    img: node,
                    descr: "Экспертный опыт в разработке серверных приложений с использованием Node.js. Создание высокопроизводительных RESTful API для передачи данных по HTTP и WebSocket, а также работа с реляционными СУБД и документно-ориентированными базами данных с применением ORM."
                },
                {
                    img: python,
                    descr: "Использование Python для автоматизации задач и написания скриптов, что повышает эффективность рабочих процессов и упрощает рутинные операции. Стремление развивать навыки в этой области."
                },
                {
                    img: go,
                    descr: "Разработка высокопроизводительных и масштабируемых приложений с использованием языка Go, что позволяет создавать эффективные решения для сложных задач."
                },
                {
                    img: unix,
                    descr: "Хорошее понимание Unix-подобных систем, включая работу с командной строкой, управление файлами и процессами, а также написание скриптов для автоматизации задач."
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
                    descr: "Опыт разработки приложений с использованием микросервисной архитектуры, включая взаимодействие через HTTP и gRPC, что позволяет создавать гибкие и масштабируемые решения, адаптирующиеся к изменениям в бизнес-требованиях."
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
                descr: 'Хотя большинство моих проектов являются приватными, вы можете заглянуть на мой профиль GitHub, где я размещаю открытые проекты и шаблоны. Если вам интересно, вы сможете увидеть, что я делал и как развиваюсь в программировании.'
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
        { img: canvas, desktop: canvasD, mobile: canvasM, name: "Canvas", type: "Fine Art Canvas" },
        { img: hadidja, desktop: hadidjaD, mobile: hadidjaM, name: "hadidja-sweets", type: 'Hadidja Sweets' },
        { img: gb, link: 'https://github.com/okmic', desktop: null, mobile: null, name: "", type: 'GitHub' }
    ]
} 