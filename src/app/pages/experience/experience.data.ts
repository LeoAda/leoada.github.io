import { SectionItem } from '../../components/section/section';

 export const experiences: SectionItem[] = [
    {
      title: 'Data/AI Engineer',
      location: 'Maxxing, Lille',
      date: 'Sep 2023 - Present',
      description: '',
      tags: [],
      details: [
        'Responsible for creating the data platform and AI projects.',
        'Migration of the Fabric data platform to Kubernetes with Spark, Airflow, MLflow, and Duckdb in Python.',
        'Prototyping a data platform on Microsoft Fabric to leverage AI and BI (Delta Lake, Spark, Data Architecture, FastAPI, Python, Docker).',
        'Implementation of LLMs to enhance the Maxxing tool usage (Langchain, Openai, PGVector).',
        'Integration of new features into the existing codebase (Angular, PHP, PostgreSQL).',
        'Mentoring an AI apprentice.',
      ],
    },
    {
      title: 'Data Science/AI Engineer (Apprentice)',
      location: 'Maxxing, Lille',
      date: 'Aug 2022 - Sep 2023',
      description: '',
      tags: [],
      details: [
        'Designed and implemented an automatic customer segmentation tool for various retail client topologies.',
        'Drafted dashboard functionality for the tool.',
        'Conducted scientific literature review on customer segmentation and clustering algorithms (Chart.js, Angular).',
        'Implemented a customer segmentation tool (Python, Scikit-learn, Pandas, Docker, Azure).',
      ],
    },
    {
      title: 'Data Engineer (Intern)',
      location: 'Inflyter, London',
      date: 'May 2022 - Jul 2022',
      description: '',
      tags: [],
      details: [
        'Supervised the implementation of a Customer Data Platform across the entire Inflyter platform.',
        'Integrated the Segment CDP (Symfony PHP, JS/PHP, Java) and data visualization (Mixpanel).',
      ],
    },
  ];