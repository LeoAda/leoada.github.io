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
`,
}];
export const workProjects: SectionItem[] = [];
export const schoolProjects: SectionItem[] = [ {
    title: 'JuniaPocket',
    location: 'Junia, Lille',
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
    title: 'Simon Say PIC18',
    location: 'Junia, Lille',
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