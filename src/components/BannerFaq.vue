<template>
  <section class="banner-faq-section">
    <div class="banner-faq-container">
      <div
        v-for="(question, index) in faq"
        :key="index"
        class="banner-faq-item"
      >
        <div class="banner-faq-title-space">
          <h2>{{ question.title }}</h2>
        </div>
        <div class="banner-faq-deploy-btn close">
          <svg
            id="Groupe_300"
            data-name="Groupe 300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35 35"
          >
            <line
              id="Ligne_18"
              data-name="Ligne 18"
              y2="35"
              transform="translate(17.5)"
              fill="none"
              stroke="#000"
              stroke-width="0.7"
            />
            <line
              id="Ligne_19"
              data-name="Ligne 19"
              y2="35"
              transform="translate(35 17.5) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-width="0.7"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 0.7">
            <g
              id="Groupe_293"
              data-name="Groupe 293"
              transform="translate(0 -17.15)"
            >
              <line
                id="Ligne_19"
                data-name="Ligne 19"
                y2="35"
                transform="translate(35 17.5) rotate(90)"
                fill="none"
                stroke="#000"
                stroke-width="0.7"
              />
            </g>
          </svg>
        </div>
        <div class="banner-faq-texte-space close">
          <p>
            {{ question.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BannerFaq",
  mounted() {
    this.ToggleFaqQuestions();
  },
  methods: {
    // Toggle FAQ Question
    ToggleFaqQuestions() {
      const QuestionDeploymentBtns = document.querySelectorAll(
        ".banner-faq-deploy-btn"
      );
      QuestionDeploymentBtns.forEach((QuestionDeploymentBtn) => {
        const QuestionDeploymentParagraphe =
          QuestionDeploymentBtn.nextElementSibling;
        QuestionDeploymentBtn.addEventListener("click", FaqParagrapheToggle);
        function FaqParagrapheToggle() {
          if (QuestionDeploymentBtn.classList.contains("close")) {
            QuestionDeploymentBtn.classList.remove("close");
            QuestionDeploymentParagraphe.classList.remove("close");
          } else {
            QuestionDeploymentBtn.classList.add("close");
            QuestionDeploymentParagraphe.classList.add("close");
          }
        }
      });
    },
  },

  computed: {
    ...mapState(["faq"]),
  },
};
</script>

<style lang="css" src="@/assets/css/banner_faq.css"></style>
