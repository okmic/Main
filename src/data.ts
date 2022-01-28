import canvas from './img/Canvas.jpg'
import hadidja from './img/Hadidja.jpg'
import gb from './img/gb.jpg'
import html from './img/skills/html.png'
import js from './img/skills/js.png'
import node from './img/skills/node.png'
import jq from './img/skills/jq.svg'
import react from './img/skills/react.svg'
import { dataType } from './types'


export const DataEng: dataType = {
    order: "Eng",
    main: {
        title: 'Hello',
        about: 'A Bit About Me',
        descr: "My name is Michael, I am 26 years old, I have been fond of programming since my school days, I have tried different directions. I wrote my first website at the age of 17 and gradually mastered the basics of programming. Tried myself in Java, C#, GO, but most of all I liked JavaScript. I am currently looking forward to challenging and interesting projects that will propel me forward!"
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
        phone: "Phone",
        email: 'Email',
        writeMe: "Write me"
    },
    projects: {
        title: 'Projects',
        projects: [
            {
                title: 'Fine Art Canvas',
                link: {
                    title: 'Link to the deployed version', 
                    href: 'https://okmic.github.io/Canvas/'
                },
                linkRep: {
                    title: 'Repository link', 
                    href: 'https://github.com/okmic/Canvas'
                },
                img: canvas,
                descr: 'The Fine Art Canvas project is my graduate work at the university, aimed at promoting artists free of charge, as well as selling their paintings without commission. Currently, the development of this project is not stopped, but is actively moving towards the SEO and the server side.'
            },
            {
                title: 'Hadidja Sweets',
                link: {
                    title: 'Link to the deployed version', 
                    href: 'https://okmic.github.io/hadidja-sweets/'
                },
                linkRep: {
                    title: 'Repository link', 
                    href: 'https://github.com/okmic/hadidja-sweets'
                },
                img: hadidja,
                descr: 'The online store Hadidja Sweets is focused on selling confectionery, the project may seem simple in appearance, but serious problems arose with the optimization, since the customer insisted on heavy decorative files like (video). This example shows my experience with cross-browser compatibility and web application optimization. The design was also developed by me.'
            },
            {
                title: 'GitHub',
                linkRep: {
                    title: 'GitHub profile link', 
                    href: 'https://github.com/okmic'
                },
                img: gb,
                descr: 'Since the vast majority of my projects are private, I am not allowed to show them publicly. But on the web service GitHub I have posted all my projects and templates, there you can see how I write the code. There you can also find a project where I train my JS-technology skills "Social-Network/Way-of-the-Samurai"'
            },

        ]
    },
    cv: {
        title: 'Curriculum Vitae',
        cv: [
            {
                title: 'Work Experience',
                about: '2017 - Present',
                descr: 'Since 2017, he has carried out various orders for the development and maintenance of software under the leadership of senior staff, worked with CRM systems, databases, web applications, website, mobile applications, fire extinguishing software and emergency notification systems.'
            },
            {
                title: 'Education',
                about: '20.07.2016 - 26.06.2021',
                descr: "09.03.03 Applied Informatics, Bachelor's Degree. 1000924 5276007",
                aboutTwo: '23.07.2011 - 25.06.2015',
                descrTwo: '09.02.04 Information systems (by industry), Diploma of secondary vocational education. Qualification, Information Systems Technician. 110904 0000091.'
            }
        ],
        skills: {
            title: 'Skills',
            skill: [
                {
                    img: html,
                    descr: 'I have practical experience in developing optimized, cross-browser, responsive and modern layouts, compatible with browsers, implemented using flex and grid technologies according to the BEM methodology. I am using a Sass preprocessor and can create CSS animations. If necessary, I can use the Bootstrap library.'
                },
                {
                    img: js,
                    descr: "If necessary, I can work with native JavaScript and create interactive applications without modern frameworks. I also keep my code readable and understandable by setting static typing with TypeScript, which will improve other developers' understanding of the code."
                },
                {
                    img: jq,
                    descr: 'When it comes to small web projects I use jQuery, it greatly simplifies things like viewing and manipulating HTML documents, event handling, animation, and Ajax with an easy-to-use API that works across multiple browsers. Through a combination of versatility, extensibility and development speed'
                },
                {
                    img: node,
                    descr: "I don't have much backend experience, but in small projects like online shopping or landing pages with feedback forms, I can develop an API to transfer data over HTTP and Websocket in PHP or JS (nodeJS) using databases MySql or MongoDB."
                },
                {
                    img: react,
                    descr: 'I got introduced to React in 2019 and has since become the main tool in my luggage. I have experience developing fast, responsive user interfaces using the React library. From project to project, I try to improve my qualifications so that my code is more readable and reliable, important parts of the application are always accompanied by unit tests. I am using Redux for state management.'
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
    }

    
}
export const DataRu: dataType = {
    order: "Ru",
    main: {
        title: "Привет",
        about: 'Немного обо мне',
        descr: "Меня зовут Михаил, мне 26 лет, программированием увлекаюсь со школьных времен, пробовал разные направления. Свой первый сайт я написал в 17 лет и постепенно осваивал азы программирования. Пробовал себя в Java, C#, GO, но больше всего понравился JavaScript. В настоящее время я с нетерпением жду сложных и интересных проектов, которые будут продвигать меня вперед!"
    },
    header: {
        name: "Михаил Охтов"
    } ,
    links: {
        cv: 'Резюме',
        projects: "Проекты",
        contacts: "Контакты"
    },
    footer: {
        phone: "Звоните",
        email: 'Почта',
        writeMe: "Пишите"
    },
    projects: {
        title: 'Проекты',
        projects: [
            {
                title: 'Fine Art Canvas',
                link: {
                    title: 'Ссылка на развернутую версию', 
                    href: 'https://okmic.github.io/Canvas/'
                },
                linkRep: {
                    title: 'Ссылка на репозиторий', 
                    href: 'https://github.com/okmic/Canvas'
                },
                img: canvas,
                descr: 'Проект Fine Art Canvas - это моя дипломная работа в университете, направленная на бесплатное продвижение художников, а также на продажу их картин без комиссии. В настоящее время развитие этого проекта не остановлено, но активно продвигается в сторону SEO и серверной части.'
            },
            {
                title: 'Hadidja Sweets',
                link: {
                    title: 'Ссылка на развернутую версию', 
                    href: 'https://okmic.github.io/hadidja-sweets/'
                },
                linkRep: {
                    title: 'Ссылка на репозиторий', 
                    href: 'https://github.com/okmic/hadidja-sweets'
                },
                img: hadidja,
                descr: 'Интернет-магазин Hadidja Sweets ориентирован на продажу кондитерских изделий, проект может показаться простым на вид, но с оптимизацией возникли серьезные проблемы, так как заказчик настаивал на тяжелых декоративных файлах типа (видео). В этом примере показан мой опыт кроссбраузерной совместимости и оптимизации веб-приложений. Дизайн тоже был разработан мной.'
            },
            {
                title: 'GitHub',
                linkRep: {
                    title: 'Ссылка на профиль GitHub', 
                    href: 'https://github.com/okmic'
                },
                img: gb,
                descr: 'Поскольку подавляющее большинство моих проектов являются частными, мне не разрешено показывать их публично. Но на веб-сервисе GitHub я разместил все свои Pet-проекты и шаблоны, там вы можете увидеть, как я пишу код. Там же вы найдете проект, в котором я тренирую свои навыки работы с JS-технологиями "Social-Network/Way-of-the-Samurai"'
            },

        ]
    },
    cv: {
        title: 'Резюме',
        cv: [
            {
                title: 'Опыт работы',
                about: '2017 - Настоящее время',
                descr: 'С 2017 года выполнял различные заказы по разработке и сопровождению программного обеспечения под руководством руководителей проектов, работал с CRM-системами, базами данных, веб-приложениями, веб-сайтами, мобильными приложениями, программным обеспечением для пожаротушения и системами экстренного оповещения.'
            },
            {
                title: 'Образование',
                about: '20.07.2016 - 26.06.2021',
                descr: '09.03.03 Прикладная информатика, бакалавриат. 1000924 5276007',
                aboutTwo: '23.07.2011 - 25.06.2015',
                descrTwo: '09.02.04 Информационные системы (по отраслям). Диплом о среднем профессиональном образовании. Квалификация, техник информационных систем. 110904 0000091.'
            }
        ],
        skills: {
            title: 'Навыки и умения',
            skill: [
                {
                    img: html,
                    descr: 'Имею практический опыт разработки оптимизированных, кросс-браузерных, адаптивных и современных макетов, совместимых с браузерами, реализованных с использованием Flex и Grid технологий по методологии БЭМ. Я использую препроцессор Sass и могу создавать анимацию CSS. При необходимости могу воспользоваться библиотекой Bootstrap.'
                },
                {
                    img: js,
                    descr: 'При необходимости я могу работать с нативным JavaScript и создавать интерактивные приложения без современных фреймворков. Я также сохраняю свой код читабельным и понятным, устанавливая статическую типизацию с помощью TypeScript, что улучшит понимание кода другими разработчиками.'
                },
                {
                    img: jq,
                    descr: 'Когда дело доходит до небольших веб-проектов, я использую jQuery, он значительно упрощает такие вещи, как просмотр и управление HTML-документами, обработку событий, анимаций и Ajax запросов с помощью простого в использовании API, который  является кроссбраузерным. Благодаря сочетанию универсальности, расширяемости и скорости разработки повляет быстро и качественно разработавыть целевые страницы.'
                },
                {
                    img: node,
                    descr: 'У меня нет большого опыта работы с серверной частью, но в небольших проектах, таких как интернет-магазины или целевые страницы с формами обратной связи, я могу разработать API для передачи данных через HTTP и Websocket на PHP или JS (nodeJS) с использованием баз данных MySql или MongoDB.'
                },
                {
                    img: react,
                    descr: 'Я познакомился с React в 2019 году и с тех пор он стал моим основным инструментом. У меня есть опыт разработки быстрых, отзывчивых пользовательских интерфейсов с использованием библиотеки React. От проекта к проекту я стараюсь повышать свою квалификацию, чтобы мой код был более читабельным и надежным, важные части приложения всегда сопровождались модульными тестами. Я использую Redux для управления состоянием.'
                }
            ]
        }
    },
    contacts: {
        title: "Контакты",
        valid: "Поле не может быть пустым",
        mailValid: "Неверный формат почты",
        submit: "Сообщение отправлено",
        lebals: {
                name: 'Имя',
                email: '*Почта',
                message: 'Сообщение',
                submit: 'Отправить'
        }
    }

}