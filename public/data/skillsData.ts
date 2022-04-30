import Skill from '../../models/Skill'

const skillsData: Skill[] = [
    {
        "name": "design",
        "technos": [    
            {
                "name": "photoshop",
                "value": 70
            }, {
                "name": "sketch",
                "value": 80
            }, {
                "name": "figma",
                "value": 85
            },
        ]
    },{
        "name": "front",
        "technos": [
            {
                "name": "angular",
                "value": 90
            }, {
                "name": "next",
                "value": 70
            }, {
                "name": "react",
                "value": 70
            }, {
                "name": "html",
                "value": 100
            }, {
                "name": "css",
                "value": 90
            }, {
                "name": "sass",
                "value": 90
            },
        ],
    },{
        "name": "back",
        "technos": [
            {
                "name": "nodejs",
                "value": 100
            }, {
                "name": "python",
                "value": 70
            }, {
                "name": "spring",
                "value": 80
            }, {
                "name": "socket",
                "value": 70
            }, {
                "name": "express",
                "value": 90
            }, {
                "name": "kafka",
                "value": 70
            },
        ],
    },{
        "name": "database",
        "technos": [
            {
                "name": "mongo",
                "value": 90
            }, {
                "name": "postgre",
                "value": 80
            }, {
                "name": "redis",
                "value": 70
            },
        ],
    },{
        "name": "devops",
        "technos": [
            {
                "name": "docker",
                "value": 70
            }, {
                "name": "bash",
                "value": 70
            },
        ]
    }
]
  
export default skillsData