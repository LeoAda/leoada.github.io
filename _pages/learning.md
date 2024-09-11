---
layout: default
permalink: /learning/
title: Learning Journey
nav: true
---

<div class="post">
  <div class="header-bar">
      <h1>Learning Journey</h1>
      <h2>To learn more about this : </h2>
  </div>

  <br>

  <div class="container featured-posts">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
      {% for post in site.learning %}
        <div class="card-item col">
          <a href="{{ post.url | relative_url }}">
            <div class="card hoverable h-100">
              <div class="row g-0">
                <div class="col-md-12">
                  <div class="card-body">
                    <h3 class="card-title text-lowercase">{{ post.title }}</h3>
                    <p class="card-text">{{ post.description }}</p>
                    <p class="post-meta">
                      <i class="fa-solid fa-calendar fa-sm"></i> {{ post.date | date: "%d-%m-%Y" }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
