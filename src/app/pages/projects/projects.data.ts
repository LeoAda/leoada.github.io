import { SectionItem } from '../../components/section/section';


const emptySectionItem: SectionItem = {
    title: '',
    location: '',
    date: '',
    description: '',
    tags: [],
    details: `
## Description :
## Skills developed:
## Technologies used :
## Source code :
`,
}
export const personnalProjects: SectionItem[] = [{
    title: 'Homelab',
    location: '',
    date: 'Feb 2025 - Present',
    description: 'Personal homelab setup',
    tags: [],
    details: `
## Description :
Using 2 refurbished Lenovo tiny m90q and a Belink ME mini as nas, I made and maintain a homelab for personal use.
It is used for hosting tools, personal projects, and media server.
Having bare metal allows me to learn a lot about hardware, networking and allows me to test very different setups.
At first I used Proxmox to host Home Assistant, and it was how I got started with homelabs.
The infrastructure evolved to a kubernetes kluster using k3s.
I switch over Talos on proxmox for now while I learn more about NixOS.
I use :
- traefik as ingress controller
- longhorn for storage
- metallb for load balancing
- fluxcd for gitops in addition to forgejo.
- prometheus and grafana for monitoring

## Skills developed:
- Kubernetes cluster administration and troubleshooting
- Infrastructure as Code (IaC) and GitOps practices
- Networking fundamentals (DNS, reverse proxy, load balancing)
- Linux system administration
- Monitoring and observability with Prometheus/Grafana
- Virtualization

## Technologies used :
![Kubernetes](assets/badges/kubernetes.svg) ![Traefik](assets/badges/traefik.svg) ![NixOS](assets/badges/nixos.svg) ![Docker](assets/badges/docker.svg) ![Home Assistant](assets/badges/home_assistant.svg) ![Ubuntu](assets/badges/ubuntu.svg) ![Proxmox](assets/badges/proxmox.svg) ![forgejo](assets/badges/forgejo.svg) ![Grafana](assets/badges/grafana.svg) ![Prometheus](assets/badges/prometheus.svg)

## Source code :
Not yet available for clean up and security reasons.
`},
{
    title: 'DepthDropper',
    location: '',
    date: 'Mar 2025',
    description: 'Web app to estimate depth based on sound delay',
    tags: [],
    details: `
## Description :
A web apps to estimate depth of a hole based on sound delay, a simple helper for a family member.

## Skills developed :
- Understanding a problem and finding a simple solution
- Web development with Angular

## Technologies used :
![Angular](assets/badges/angular.svg), TypeScript

## Source code :
- [GitHub Repository](https://github.com/LeoAda/DepthDropper)
`,
},{
    title: 'Colocatron',
    location: '',
    date: 'Mai 2024',
    description: 'Api to manage flatshare',
    tags: [],
    details: `
## Description :
A flask api and web pages to manage flatshare tasks, expenses and shopping list.
I made this project to learn flask and practice web development.

## Skills developed:
- Flask web development

## Technologies used :
![Python](assets/badges/python.svg), Flask, SQLite, SQLAlchemy, HTML

## Source code :
- [GitHub Repository](https://github.com/LeoAda/colocatron)
`,
},{
    title: 'Weather hybrid work',
    location: '',
    date: 'Nov 2022 - Dec 2022',
    description: 'CLI in golang to get weather forecast for hybrid work planning',
    tags: [],
    details: `
## Description :
A small cli connecting using Open Meteo forecast API to get weather forecast for hybrid work planning. It gives a recommendation to work from home or office based on weather conditions (rain, temperature, wind).
I made this project to try golang.

## Skills developed:
- Golang programming
- Consuming REST APIs
- CLI application development

## Technologies used :
![Golang](assets/badges/go.svg), Open Meteo API

## Source code :
- [GitHub Repository](https://github.com/LeoAda/weather-hybrid-work)
`
},{
    title: 'Daily mood',
    location: '',
    date: 'Jan 2024',
    description: 'Mood tracking app',
    tags: [],
    details: `
## Description :
A simple mood tracking app made with SvelteKit and TailwindCSS.
It allows to track daily mood with a simple interface and view mood over time with a grid. I made this project to learn SvelteKit.

## Technologies used :
SvelteKit, TailwindCSS, TypeScript, Vite
## Source code :
- [GitHub Repository](https://github.com/LeoAda/DailyMood)
`,
}];
export const workProjects: SectionItem[] = [];
export const schoolProjects: SectionItem[] = [ {
    title: 'ML FDA cancer classification',
    location: 'Junia Isen, Lille',
    date: '2022 - 2023',
    description: 'ML model to classify cancer types with FdA',
    tags: [],
    details: `
## Description :
In the context of a research project about cancer detection using mems and functional data analysis (FdA), 
we had chance to help develop a machine learning model to classify different types of cancer based on FdA-processed data.
The project involved data preprocessing, feature extraction using FdA techniques, and training various machine learning algorithms to achieve accurate classification.

## Skills developed:
- Functional Data Analysis (FdA)
- Machine learning model development, evaluation, and hyperparameter tuning
- Real-world data

## Technologies used :
Python, Scikit-learn, Pandas, NumPy, Matplotlib

## Source code :
- [GitHub Repository](https://github.com/LeoAda/ML-FDA-cancer-M1-project)
`,
},{
    title: 'JuniaPocket',
    location: 'Junia Isen, Lille',
    date: 'Jun 2021 - Oct 2021',
    description: 'Planning, grades and room booking web app',
    tags: [],
    details: `
## Description :
JuniaPocket is a web app developed by a team of 5 students during our 3rd year at Junia. It aims to facilitate the daily life of Junia students by providing them with easy access to their schedule, grades, and room booking functionalities.
I was responsible of the connection between the frontend and backend in addition to participating in the development of the backend using NodeJS and Express.

## Skills developed:
- Full-stack web development with NodeJS and NextJS
- RESTful API design and implementation
- Database design with MongoDB
- Team collaboration and project management
- Frontend-backend integration

## Technologies used :
![NodeJS](assets/badges/node.svg) ![MongoDB](assets/badges/mongodb.svg) ![NextJS](assets/badges/nextjs.svg)

## Source code :
- [Notification Module](https://github.com/LeoAda/notif-juniapocket)
- [Backend not available here]
- [Frontend not available here]
`,
},{
    title: 'RF gyroscope guitare',
    location: 'Junia Isen, Lille',
    date: 'May 2021',
    description: 'Guitare effects controller using gyroscope',
    tags: [],
    details: `
## Description :
A radio frequency gyroscope for guitar to create effects based on motion. It's based on an arduino nRF24L01 radio module with a gyroscope and accelerometer.
This is sent to a receiver connected to the a computer that applies effects like a looper and shifter on Pure Data.
It use a 3D printed mount to attach to the guitar headstock.

## Skills developed:
- Embedded systems programming with Arduino
- Radio frequency communication using nRF24L01 modules
- Sensor integration (gyroscope and accelerometer)
- Audio processing with Pure Data

## Technologies used :
Soliworks, Arduino, Pure Data

## Source code :
- [GitHub Repository](https://github.com/LeoAda/RF_gyroscope_guitare)
`},
{
    title: 'Simon Say PIC18',
    location: 'Junia Isen, Lille',
    date: 'Apr 2021',
    description: 'Embedded Simon game on PIC18 microcontroller',
    tags: [],
    details: `
## Description :
In the context of a digital electronics course, we recreated the classic "Simon" memory game.
The project involved soldering both SMD and through-hole components onto a pre-made PCB, then programming the PIC18F25K40 microcontroller in assembly language to implement the game logic.

The game challenges players to memorize and reproduce increasingly long sequences of lights and sounds, testing their memory skills.

## Skills developed:
- PCB assembly and SMD/through-hole soldering techniques
- Assembly language programming for PIC microcontrollers
- Hardware debugging and testing
- Understanding of digital electronics fundamentals

## Technologies used:
Assembly language, PIC18F25K40 microcontroller, SMD and through-hole components

## Source code:
- [GitHub Repository](https://github.com/LeoAda/Simon_PIC18_course_project)
`,
}];