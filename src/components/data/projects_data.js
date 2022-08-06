import decisionwheel from '../../assets/projects_images/decision_wheel.PNG'
import blog from '../../assets/projects_images/flaskblog.PNG'
import notes from '../../assets/projects_images/notes.PNG'
import calculator from '../../assets/projects_images/calculator.PNG'
import cargame from '../../assets/projects_images/cargame.PNG'
import contact from '../../assets/projects_images/ContactManager.PNG'
import Amazon from '../../assets/projects_images/Amazon sentiment analysis.png'
import malaria from '../../assets/projects_images/malaria.PNG'
import mnist from '../../assets/projects_images/mnist.PNG'
import covid from '../../assets/projects_images/covid-19.PNG'
import breast_cancer from '../../assets/projects_images/breast_cancer.jpg'
import zomato from '../../assets/projects_images/zomato.png'
import kyphosis from '../../assets/projects_images/kyphosis.jpg'
import titanic from '../../assets/projects_images/titanic.jpg'
import house_price from '../../assets/projects_images/house-price.jpg'
import stock_price from '../../assets/projects_images/stock.png'

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
    {
        name: 'Malaria Detection ',
        image: malaria,
        deployed_url:'https://amanbhagat0399.github.io/Malaria-Detection-CNN/' ,
        github_url: 'https://github.com/amanbhagat0399/Malaria-Detection-CNN',
        category: ['ds','ml']
    },
    {
        name: 'Amazon Sentiment Analysis',
        image: Amazon,
        deployed_url:'https://amanbhagat0399.github.io/Amazon-Sentiment-Analysis/' ,
        github_url: 'https://github.com/amanbhagat0399/Amazon-Sentiment-Analysis',
        category: ['ds','ml']
    },
    {
        name: 'Handwritten-Digit-Predictor',
        image: mnist,
        deployed_url:'https://amanbhagat0399.github.io/MNIST-Handwritten-Digit-Predictor-ANN/' ,
        github_url: 'https://github.com/amanbhagat0399/MNIST-Handwritten-Digit-Predictor-ANN',
        category: ['ds','ml']
    },
    {
        name: 'COVID-19-Data-Analyisis ',
        image: covid,
        deployed_url:'https://amanbhagat0399.github.io/covid-19-Data-Analysis/' ,
        github_url: 'https://github.com/amanbhagat0399/covid-19-Data-Analysis',
        category: ['ds']
    },
    {
        name: 'Breast-Cancer-Prediction',
        image: breast_cancer,
        deployed_url:'https://amanbhagat0399.github.io/Breast-Cancer-prediction-svm/' ,
        github_url: 'https://github.com/amanbhagat0399/Breast-Cancer-prediction-svm',
        category: ['ds','ml']
    },

    {
        name: 'Zomato-Data-Analysis',
        image: zomato,
        deployed_url:'https://amanbhagat0399.github.io/Zomato-Data-Analysis/' ,
        github_url: 'https://github.com/amanbhagat0399/Zomato-Data-Analysis',
        category: ['ds']
    },
    {
        name: 'Kyphosis Disease Predicyion',
        image: kyphosis,
        deployed_url:'https://amanbhagat0399.github.io/Kyphosis-prediction-Decision-Tree----Random-Forest/' ,
        github_url: 'https://github.com/amanbhagat0399/Kyphosis-prediction-Decision-Tree----Random-Forest',
        category: ['ds','ml']
    },
    {
        name: 'Titanic-Survivors-Predictor',
        image: titanic,
        deployed_url:'https://amanbhagat0399.github.io/Titanic-Survivors-Logistic--Regression/' ,
        github_url: 'https://github.com/amanbhagat0399/Titanic-Survivors-Logistic--Regression',
        category: ['ds','ml']
    },
    {
        name: 'USA-House-Price-Predictor',
        image: house_price,
        deployed_url:'https://amanbhagat0399.github.io/USA-Housing-Linear-Regression/' ,
        github_url: 'https://github.com/amanbhagat0399/USA-Housing-Linear-Regression',
        category: ['ds','ml']
    },
    {
        name: 'Stock-Price-Predicton',
        image: stock_price,
        deployed_url:'https://amanbhagat0399.github.io/Stock-Price-Prediction-RNN/' ,
        github_url: 'https://github.com/amanbhagat0399/Stock-Price-Prediction-RNN',
        category: ['ds','ml']
    },

]

export default data_projects;