import decisionwheel from '../../assets/projects_images/decision_wheel.PNG'
import blog from '../../assets/projects_images/flaskblog.PNG'
import notes from '../../assets/projects_images/notes.PNG'
import calculator from '../../assets/projects_images/calculator.PNG'
import cargame from '../../assets/projects_images/cargame.PNG'
import contact from '../../assets/projects_images/ContactManager.PNG'

const data_projects = [
    {
        name: 'Decision making Tool',
        image: decisionwheel,
        deployed_url:'https://amanbhagat0399.github.io/DECISION-WHEEL-3/' ,
        github_url: 'https://github.com/amanbhagat0399/DECISION-WHEEL-3',
        category: ['webdev']
    },
    {
        name: 'A Blog Website ',
        image: blog,
        deployed_url:'http://flask-blog-website.herokuapp.com/home?page=7' ,
        github_url: 'https://github.com/amanbhagat0399/flask-blog-website',
        category: ['flask','python','webdev']
    },
    {
        name: 'Notes Web App ',
        image: notes,
        deployed_url:'https://notes-app-aman-bhagat.herokuapp.com/' ,
        github_url: '',
        category: ['flask','python','webdev']
    },
    {
        name: 'Scientific Calculator GUI ',
        image: calculator,
        deployed_url:'https://drive.google.com/file/d/1TL5WiTeRs-7ZhlORsfzuaTBxQnEcibYs/view?usp=sharing' ,
        github_url: 'https://github.com/amanbhagat0399/Scientific-and-Standard-Calculator-Interface-Using-Tkinter-Module/tree/master',
        category: ['python']
    },
    {
        name: 'Car Racing Game ',
        image: cargame,
        deployed_url:'https://drive.google.com/file/d/1yl2YrG6zWOqYJCBIQva8Sgg37IMq5E27/view?usp=sharing' ,
        github_url: 'https://github.com/amanbhagat0399/Car-Racing-Game-Using-pygame-Library-in-Python/tree/master',
        category: ['python']
    },
    {
        name: 'React Contact Manager App ',
        image: contact,
        deployed_url:'https://react-contact-manager-app.netlify.app/' ,
        github_url: 'https://github.com/amanbhagat0399/React-Contact-Manager-App/tree/master',
        category: ['react.js']
    },
]

export default data_projects;