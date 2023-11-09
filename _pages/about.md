---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello and welcome to my website! My name is Divyanshu Mishra, and I'm a PhD student at the [Department of Engineering Science](https://ibme.ox.ac.uk/) of the University of Oxford supervised by [Professor Alison Noble](https://ibme.ox.ac.uk/person/alison-noble/) and [Professor Vicente Grau Colomer](https://ibme.ox.ac.uk/person/vicente-grau-colomer/). My research focuses on Computer Vision and its application to the medical domain. Currently, I am working on video-understanding,federated learning and its applications in detecting Congenital Heart Diseases.
Before starting my academic journey, I worked as a Data Scientist at Translational Health Science and Technology Institute,Government of India. 

---
## News
**[11/23]** Gave talk at [Synthetic Data for Machine Learning](https://www.bmva.org/meetings/23-11-08-Synthetic%20Data%20for%20Machine%20Learning.html)  organised by The British Machine Vision Association and Society for Computer Vision.

**[8/23]** Two abstracts [1](https://obgyn.onlinelibrary.wiley.com/doi/full/10.1002/uog.26323),[2](https://obgyn.onlinelibrary.wiley.com/doi/abs/10.1002/uog.26499) were published and accepted for Oral presentation at [ISUOG World Congress 2023](https://www.isuog.org/events/isuog-world-congress-2023.html) .

**[8/23]** Two papers [1](https://link.springer.com/chapter/10.1007/978-3-031-43907-0_21) [2](https://link.springer.com/chapter/10.1007/978-3-031-43895-0_39) accepted at [MICCAI 2023](https://conferences.miccai.org/2023/en/).

**[7/23]** Attended the [International Computer Vision Summer School](https://iplab.dmi.unict.it/icvss2023/Home)  held in Sicily,Italy (100 students selected every year)

**[10/22]** Started DPhil supervised by [Professor Alison Noble](https://ibme.ox.ac.uk/person/alison-noble/) and [Professor Vicente Grau Colomer](https://ibme.ox.ac.uk/person/vicente-grau-colomer/)



---
## Selected Publications
<section id="publications"> 
<style>
        /* Add some basic styling to arrange elements */
        .container {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 20px;
        }

        .image {
            max-width: 300px; /* Adjust the width as needed */
        }

        .description-box {
            flex: 1; /* Allow the description box to grow to fill available space */
            background-color: #f0f0f0; /* Background color for the description box */
            padding: 10px;
            border: 1px solid #ccc;
        }
</style>
<div class="container">
        <img src="images/dcdm_figure.webp" alt="paper_figure" class="image">
        <div class="description-box">
            <h3>Dual Conditioned Diffusion Models for Out-of-Distribution Detection: Application to Fetal Ultrasound Videos</h3>
            <p><small><b>Divyanshu Mishra</b>,He Zhao, Pramit Saha,Aris T. Papageorghiou & J. Alison Noble <br>

            <i>MICCAI 2023</i> <br>

           Out-of-distribution (OOD) detection is essential to improve the reliability of machine learning models by detecting samples that do not belong to the training distribution. We introduce Dual Conditioned Diffusion models (DCDM) to detect OOD samples in Ultrasound videos given we have information only about ID samples during training.
            </small>
            </p>
        </div>
</div>

<a role="button" href="https://arxiv.org/pdf/2311.00469.pdf" class="btn btn-dark">Arxiv Version</a>     <a role="button" href="https://link.springer.com/chapter/10.1007/978-3-031-43907-0_21" class="btn btn-warning">Conference Version</a>


<div class="container">
        <img src="images/isofed.webp" alt="paper_figure" class="image">
        <div class="description-box">
            <h3>Rethinking Semi-Supervised Federated Learning: How to Co-train Fully-Labeled and Fully-Unlabeled Client Imaging Data</h3>
            <p><small><b>Pramit Saha</b>,Divyanshu Mishra, J. Alison Noble <br>
            <i>MICCAI 2023</i> <br>

           The most challenging, yet practical, setting of semi-supervised federated learning (SSFL) is where a few clients have fully labeled data whereas the other clients have fully unlabeled data. This is particularly common in healthcare settings where collaborating partners (typically hospitals) may have images but not annotations. We propose IsoFed that circumvents the problem by avoiding simple averaging of supervised and semi-supervised models together. 
            </small>
            </p>
        </div>
</div>

<a role="button" href="https://arxiv.org/pdf/2310.18815v1.pdf" class="btn btn-dark">Arxiv Version</a>     <a role="button" href="https://link.springer.com/chapter/10.1007/978-3-031-43895-0_39" class="btn btn-warning">Conference Version</a>
</section>