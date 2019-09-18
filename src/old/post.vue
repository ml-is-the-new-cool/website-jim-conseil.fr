<!-- Post -->
                <div v-for="(partner, index) in $t('partners.content')"
                     :key="partner.title"
                     class="blog-post">
                  <a :href="partner.link">
                    <!-- Featured image -->
                    <div class="featured-image">
                      <img src="post1.svg" alt="Aix-Marseille Université">
                    </div>
                    <!-- Content -->
                    <div class="content">
                      <div class="post-title">
                        {{ partner.name }}
                      </div>
                      <p>
                        {{ partner.description }}
                      </p>
                    </div>
                  </a>
                </div>
                <!-- /Post -->
