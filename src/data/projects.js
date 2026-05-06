export const projects = [
    {
        title: 'Padtani App (Bangkit Capstone Project)',
        desc: 'An app to help rice farmer to increase their farm using machine learning',
        fullDesc: 'Padtani is a Bangkit Capstone project aimed at enhancing rice quality in Indonesia, a vital sector for the country\'s economy. By harnessing cutting-edge machine learning through TensorFlow, this app effectively identifies rice diseases and analyzes leaf color, providing farmers with precise fertilization recommendations for improved crop yield and sustainability.',
        details: 'The dataset utilized encompasses five distinct rice leaf diseases, namely Bacterial Leaf Blight, Brown Spot, Healthy, Leaf Blast, Leaf Scald, and Narrow Brown Spot, sourced from Kaggle. Employing convolutional and max-pooling methodologies within TensorFlow\'s Keras framework facilitates efficient classification, subsequently transformed into TensorFlow Lite format.',
        tags: ['Machine Learning', 'Mobile App', 'Agriculture'],
        technologies: ['TensorFlow', 'Figma', 'Laravel', 'Google Cloud Platform', 'Kotlin'],
        image: '/images/logo.jpeg',
        gallery: ['/images/PT1.png', '/images/PT2.png'],
        link: 'https://drive.google.com/drive/folders/1xI_3bjJPLLmUa9mzgFCuYLtOELdM5SNr?usp=drive_link'
    },
    {
        title: 'Enterprise Data Pipeline Maintenance',
        desc: 'Maintaining and monitoring a scalable ETL pipeline for enterprise analytics and reporting workflows.',
        fullDesc: 'Currently handling the day-to-day maintenance and monitoring of an enterprise data pipeline that processes data from multiple sources such as CSV, Excel, XML, and compressed files. The workflow uses Airflow and Python for data ingestion and transformation, stores Parquet files in MinIO, and loads clean analytical data into SingleStore for reporting and analytics. My role focuses on making sure the pipeline runs smoothly, troubleshooting issues, monitoring jobs, and keeping the data flow stable for business operations.',
        tags: ['Airflow', 'Python', 'MinIO', 'SingleStore', 'ETL', 'Data Engineering'],
        image: '/images/tools.png',
        gallery: ['/images/tools.png'],
        link: 'none'
    },
    {
        title: 'Stroke Prediction using PSO-BMFKNN',
        desc: 'My Undergraduate Thesis tries to predict stroke using Bonferroni Mean Fuzzy K-Nearest Neighbor with Particle Swarm Optimization.',
        fullDesc: 'Entitled \'Bonferroni Mean Fuzzy K-Nearest Neighbor using Particle Swarm Optimization (PSO-BMFKNN) for Stroke Prediction,\' my undergraduate thesis addresses the global challenge of stroke prediction. According to WHO data, stroke ranks as the second leading cause of death and the third leading cause of disability globally. One out of every four people worldwide is at risk of experiencing a stroke in their lifetime.',
        details: 'Leveraging patient health record datasets from Kaggle, the study employs the BMFKNN algorithm to predict strokes. The uniqueness of the Bonferroni method lies in its approach to fuzzy calculations. First, we compute the Bonferroni mean to determine the average of each data class. Next, this average is input into the fuzzy function, which identifies the most dominant results to serve as classification outcomes. At last, the prediction accuracy is refined through PSO optimization, with the F1-score serving as the primary evaluation metric.',
        tags: ['Machine Learning', 'Python', 'Research'],
        technologies: ['Python', 'Machine Learning', 'PSO Algorithm', 'Bonferroni Mean'],
        image: '/images/BMFKNN.png',
        gallery: ['/images/KNN4.png'],
        link: 'https://drive.google.com/drive/folders/1KEbBt2OZw-J978U8s7FFyhJmp1se9Tqr?usp=drive_link'
    },
    {
        title: 'Market Research',
        desc: 'Market Research in several projects Venture Capital, Embodied Robotics, Healthcare, Workflow Automation',
        fullDesc: 'One of the freelance projects I worked on was conducting market research, which included analyzing trends, regional insights, challenges, market positioning, and more. The purpose of this research was to identify opportunities and understand current market conditions, particularly in sectors that have the potential to be integrated with AI.',
        tags: ['Research', 'Business Analysis', 'Strategy'],
        image: '/images/MarketResearch.png',
        gallery: ['/images/MR1.png', '/images/MR22.png'],
        link: '#'
    },
    {
        title: 'Business Analytics Singapore Land',
        desc: 'Transform and Load Data using Excel (Preprocessing) to PowerBI.',
        tags: ['PowerBI', 'Excel', 'Data Analytics'],
        image: '/images/BIAnalysis.png',
        link: '#'
    },
    {
        title: 'Product Visualization airbnb',
        desc: 'Simple dashboard visualization using Tableau',
        tags: ['Tableau', 'Data Visualization', 'Analytics'],
        image: '/images/tableau.png',
        link: '#'
    },
    {
        title: 'Covid-19 Mask Detection',
        desc: 'An image processing method for mask detection using python',
        fullDesc: 'The paper titled \'Enhancing Mask Compliance During the COVID-19 Pandemic: Utilizing Image Segmentation\' delves into the crucial aspect of encouraging mask-wearing to mitigate the spread of COVID-19. Amidst the pandemic\'s devastating impact, adherence to health protocols, such as wearing masks outdoors, remains paramount.',
        details: 'The methodology employed entails various image processing techniques. Commencing with Thresholding to simplify the image, followed by the application of the K-means algorithm and Cascade classifier. Image segmentation aids in breaking down the image into distinct regions, facilitating focused analysis. The Cascade classifier identifies masks on faces, while K-means facilitates the differentiation between masks and other areas based on color disparities. K-means is chosen for its simplicity and effectiveness in handling large datasets and outliers. Furthermore, the Thresholding method enhances segmentation clarity by emphasizing bright color areas, thereby aiding in the differentiation of objects based on their color.',
        tags: ['Python', 'Computer Vision', 'Deep Learning'],
        technologies: ['Python', 'K-means Algorithm', 'Cascade Classifier', 'Image Segmentation', 'Thresholding'],
        image: '/images/MaskDetect.png',
        gallery: ['/images/MaskDetect2.png'],
        link: 'https://drive.google.com/drive/folders/10SnFmtXTCrI7qIqILTavQWl9CQwv5M2a?usp=drive_link'
    },
    {
        title: 'Walmart Inventory Retail Dashboard',
        desc: 'Interactive retail analytics dashboard built using Excel and Tableau for inventory and sales performance monitoring.',
        fullDesc: 'Developed an interactive Walmart Retail Inventory Dashboard using Tableau to analyze revenue performance, inventory levels, forecast accuracy, pricing competitiveness, and weather impact on sales. The dataset was cleaned and prepared in Excel before being transformed into interactive visualizations in Tableau, enabling actionable insights for retail decision-making and inventory optimization.',
        tags: ['Tableau', 'Excel', 'Data Visualization'],
        image: '/images/walmart.png',
        gallery: ['/images/walmart.png'],
        link: 'none'
    },
    {
        title: 'Bike Sales Dashboard',
        desc: 'Dashboard visualization using Excel',
        tags: ['Excel', 'Data Visualization', 'Analytics'],
        image: '/images/Excel.png',
        link: '#'
    },
    {
        title: 'Market Analysis Dashboard',
        desc: 'Dashboard visualization using Excel',
        tags: ['Excel', 'Business Intelligence', 'Analytics'],
        image: '/images/MarketAFront.png',
        link: '#'
    },
    {
        title: 'Customer Bank Analysis',
        desc: 'Dashboard visualization using BI',
        tags: ['Business Intelligence', 'Data Analytics', 'Finance'],
        image: '/images/BankFront.png',
        link: '#'
    },
];
