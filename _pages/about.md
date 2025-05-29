---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## 📰 Welcome to My Website!

I'm **Divyanshu Mishra**, a PhD student in the Department of Engineering Science at the [University of Oxford](https://www.ox.ac.uk/), where I am fortunate to be supervised by [Professor Alison Noble](https://ibme.ox.ac.uk/person/alison-noble/) and fully funded by the **Athena-Bronze Scholarship**.

My research centers on **long video understanding**, with a focus on **video localization**, **self-supervised video representation learning**, and **multi-modal large language models**. Much of my recent work develops these methods in the context of fetal ultrasound imaging for congenital heart disease detection, where I aim to build algorithms that streamline clinical workflows and support clinicians in making earlier and more accurate diagnoses.

Most recently, I interned at **Amazon Science** as an **Applied Scientist 2**, where I worked on **Video Large Language Models (Video-LLMs)** and developed training methodologies that leverage single-modality data to reduce reliance on paired datasets.

Prior to my PhD, I worked as a **Data Scientist** at the [Translational Health Science and Technology Institute (THSTI)](https://thsti.res.in/), Government of India, under the guidance of [Prof. Shinjini Bhatnagar](https://thsti.res.in/en/faculty-profile/Shinjini-Bhatanagar). There, I developed machine learning algorithms for a range of challenges in maternal and child health, including **preterm birth detection**, **gestational age prediction**, and **neonatal outcome assessment**. This role gave me valuable experience working closely with clinicians and public health experts to design machine learning tools for practical use in healthcare.

While many of my projects have focused on medical applications, my broader research interests span **video understanding**, **self-supervised learning**, and **large multi-modal models**, with the goal of advancing both foundational methods and their real-world impact across domains.

Feel free to explore my website to learn more about my projects, publications, and ongoing work. I am always open to new collaborations and ideas. Please get in touch if you're interested in connecting!

---
## 📰 News & Achievements

<div class="news-container">
    <div class="news-section">
        <h3>📚 Publications</h3>
        <div class="news-item">
            <div class="news-date">Apr. 25</div>
            <div class="news-content">
                <strong>Published in Medical Image Analysis (Journal Impact Factor 10.7):</strong>
                <ul>
                    <li><strong>Video Understanding</strong><br>
                        TIER-LOC: Visual Query-based Video Clip Localization in Fetal Ultrasound Videos with a Multi-Tier Transformer<br>
                        <em>Proceedings: <a href="https://www.sciencedirect.com/science/article/pii/S1361841524001230">Read it here</a></em>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="news-item">
            <div class="news-date">Mar. 25</div>
            <div class="news-content">
                <strong>Preprint:</strong>
                <ul>
                    <li><strong>Video Understanding and Model Merging</strong><br>
                        Self-supervised Normality Learning and Divergence Vector-guided Model Merging for Zero-shot Congenital Heart Disease Detection in Fetal Ultrasound Videos<br>
                        <em>Proceedings: <a href="https://arxiv.org/pdf/2503.07799">Read it here</a></em>
                    </li>
                </ul>
                <strong>Accepted to CVPR 2025:</strong>
                <ul>
                    <li><strong>Federated Learning</strong><br>
                        F3OCUS – Federated Finetuning of Vision-Language Foundation Models with Optimal Client Layer Updating Strategy via Multi-objective Meta-Heuristics<br>
                        <em>Proceedings: <a href="https://arxiv.org/abs/2411.11912">Read it here</a></em>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="news-section">
        <h3>🎓 Academic & Professional</h3>
        <div class="news-item">
            <div class="news-date">Aug. 24</div>
            <div class="news-content">
                <strong>Internship at Amazon Science:</strong><br>
                Selected as an <strong>Applied Scientist</strong> to work on <strong>Video-LLMs</strong>, focusing on training methodologies using single-modality to reduce dependency on paired data.
            </div>
        </div>

        <div class="news-item">
            <div class="news-date">Nov. 23</div>
            <div class="news-content">
                <strong>Guest Speaker:</strong><br>
                Delivered a talk at the <a href="https://www.bmva.org/meetings/23-11-08-Synthetic%20Data%20for%20Machine%20Learning.html">Synthetic Data for Machine Learning</a> conference organized by The British Machine Vision Association and Society for Computer Vision.
            </div>
        </div>
    </div>
</div>

<style>
.news-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.news-section {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.news-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dee2e6;
}

.news-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.news-date {
    min-width: 100px;
    font-weight: bold;
    color: #495057;
}

.news-content {
    flex: 1;
}

.news-content ul {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

.news-content li {
    margin-bottom: 0.5rem;
}
</style>

## Selected Publications
<section id="publications"> 
<style>
.publications-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.publication-card {
    display: flex;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.2s ease;
}

.publication-card:hover {
    transform: translateY(-2px);
}

.publication-image {
    flex: 0 0 300px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.publication-image img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

.publication-content {
    flex: 1;
    padding: 1.5rem;
}

.publication-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #2c3e50;
}

.publication-authors {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.75rem;
}

.publication-venue {
    font-style: italic;
    color: #666;
    margin-bottom: 1rem;
}

.publication-abstract {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #444;
    margin-bottom: 1rem;
}

.publication-links {
    display: flex;
    gap: 1rem;
}

.publication-links a {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s ease;
}

.btn-dark {
    background-color: #343a40;
    color: white;
}

.btn-dark:hover {
    background-color: #23272b;
}

.btn-warning {
    background-color: #ffc107;
    color: #000;
}

.btn-warning:hover {
    background-color: #e0a800;
}
</style>

<div class="publications-container">
    <div class="publication-card">
        <div class="publication-image">
            <img src="images/MAIN_FIGURE_AAAI_page-0001.jpg" alt="MCAT paper figure">
        </div>
        <div class="publication-content">
            <h3 class="publication-title">MCAT: Visual Query-Based Localization of Standard Anatomical Clips in Fetal Ultrasound Videos Using Multi-Tier Class-Aware Token Transformer</h3>
            <div class="publication-authors">Divyanshu Mishra, Pramit Saha, He Zhao, Netzahualcoyotl Hernandez-Cruz, Olga Patey, Aris T. Papageorghiou & J. Alison Noble</div>
            <div class="publication-venue">AAAI 2025</div>
            <p class="publication-abstract">We introduce the Visual Query-based Video Clip Localization (VQ-VCL) task—retrieving a relevant video clip from a sequence given a query image—and present MCAT, which leverages a multi-tier class-aware token transformer for robust clip localization in fetal ultrasound videos.</p>
            <div class="publication-links">
                <a href="https://arxiv.org/abs/2504.06088" class="btn-dark">Arxiv Version</a>
                <a href="https://ojs.aaai.org/index.php/AAAI/article/view/35047" class="btn-warning">Conference Version</a>
            </div>
        </div>
    </div>

    <div class="publication-card">
        <div class="publication-image">
            <img src="images/tierloc.jpg" alt="TIER-LOC paper figure">
        </div>
        <div class="publication-content">
            <h3 class="publication-title">TIER-LOC: Visual Query-based Video Clip Localization in Fetal Ultrasound Videos with a Multi-Tier Transformer</h3>
            <div class="publication-authors">Divyanshu Mishra, Pramit Saha, He Zhao, Netzahualcoyotl Hernandez-Cruz, Olga Patey, Aris T. Papageorghiou & J. Alison Noble</div>
            <div class="publication-venue">Medical Image Analysis (Journal Impact Factor 10.7)</div>
            <p class="publication-abstract">We introduce the Visual Query-based Video Clip Localization (VQ-VCL) task—retrieving a relevant video clip from a sequence given a query image—and present TIER-LOC, which leverages a multi-tier transformer architecture for robust clip localization in fetal ultrasound videos.</p>
            <div class="publication-links">
                <a href="https://www.sciencedirect.com/science/article/pii/S1361841525001586" class="btn-dark">Journal Link</a>
            </div>
        </div>
    </div>

    <div class="publication-card">
        <div class="publication-image">
            <img src="images/stanloc_image.webp" alt="MCAT paper figure">
        </div>
        <div class="publication-content">
            <h3 class="publication-title">STAN-LOC: Visual Query-Based Video Clip Localization for Fetal Ultrasound Sweep Videos</h3>
            <div class="publication-authors">Divyanshu Mishra, Pramit Saha, He Zhao, Olga Patey, Aris T. Papageorghiou & J. Alison Noble</div>
            <div class="publication-venue">MICCAI 2024</div>
            <p class="publication-abstract">We introduce the Visual Query-based Video Clip Localization (VQ-VCL) task—retrieving a relevant video clip from a sequence given a query image—and present STAN-LOC, which leverages a query-aware spatio-temporal transformer with multi-anchor contrastive learning for robust clip localization.</p>
            <div class="publication-links">
                <a href="https://arxiv.org/abs/2411.11912" class="btn-dark">Arxiv Version</a>
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-72083-3_69" class="btn-warning">Conference Version</a>
            </div>
        </div>
    </div>

    <div class="publication-card">
        <div class="publication-image">
            <img src="images/dcdm_figure.webp" alt="DCDM paper figure">
        </div>
        <div class="publication-content">
            <h3 class="publication-title">Dual Conditioned Diffusion Models for Out-of-Distribution Detection: Application to Fetal Ultrasound Videos</h3>
            <div class="publication-authors">Divyanshu Mishra, He Zhao, Pramit Saha, Aris T. Papageorghiou & J. Alison Noble</div>
            <div class="publication-venue">MICCAI 2023</div>
            <p class="publication-abstract">Out-of-distribution (OOD) detection is essential to improve the reliability of machine learning models by detecting samples that do not belong to the training distribution. We introduce Dual Conditioned Diffusion models (DCDM) to detect OOD samples in Ultrasound videos given we have information only about ID samples during training.</p>
            <div class="publication-links">
                <a href="https://arxiv.org/pdf/2311.00469.pdf" class="btn-dark">Arxiv Version</a>
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-43907-0_21" class="btn-warning">Conference Version</a>
            </div>
        </div>
    </div>
</div>
</section>