import { SectionItem } from '../../components/section/section';

export const personnalProjects: SectionItem[] = [{
    title: 'Homelab',
    location: '',
    date: 'Feb 2025 - Present',
    description: 'Personal homelab setup',
    tags: [],
    details: `
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

## Technologies used :
![Kubernetes](assets/badges/kubernetes.svg) ![Traefik](assets/badges/traefik.svg) ![NixOS](assets/badges/nixos.svg) ![Docker](assets/badges/docker.svg) ![Home Assistant](assets/badges/home_assistant.svg) ![Ubuntu](assets/badges/ubuntu.svg) ![Proxmox](assets/badges/proxmox.svg) ![forgejo](assets/badges/forgejo.svg) ![Grafana](assets/badges/grafana.svg) ![Prometheus](assets/badges/prometheus.svg)`,
}];
export const workProjects: SectionItem[] = [];
export const schoolProjects: SectionItem[] = [];