
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogin() {
  router.push('/login')
}

function handleRegister() {
  router.push('/register')
}
</script>

<template>
  <full-page maximize>
    <hero-area>
      <div class="slogan">
        <language-panel code="en_us">
          <h1>The intelligent APIs for your business</h1>
          <h2>We take care of the Artificial Intelligence tools while you focus your intelligent process</h2>
          <h3>Ready to go or upon demand!</h3>
        </language-panel>
        <language-panel code="pt_br">
          <h1>As APIs inteligentes do seu negócio</h1>
          <h2>Nós cuidamos das ferramentas de Inteligência Artificial enquanto você foca nos seus processos inteligentes</h2>
          <h3>A pronta entrega ou sob demanda! Nesta versão beta nós estamos oferecendo as APIs públicas da plataforma Simplesia para testes sem o custo de mensalidade. Peça a sua chave de acesso!</h3>
        </language-panel>
        <div class="actions">
          <flat-button :onClick="handleRegister" label="register" secondary />
          <flat-button :onClick="handleLogin" label="login" green />
        </div>
      </div>
      <div class="graphic">
        <lottie-animation src="/animations/home.json" />
      </div>
    </hero-area>
    <div class="features">
      <language-panel code="en_us">
        <div class="feature">
          <h3>API store</h3>
          <p>APIs developed and offered to all of our store clients</p>
        </div>
        <div class="feature">
          <h3>Continuous updates</h3>
          <p>We are responsible to keep the model accuracy according to the natural process changes (for example, new cars on the market)</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
      </language-panel>
      <language-panel code="pt_br">
        <div class="feature">
          <h3>Loja de APIs</h3>
          <p>APIs desenvolvidas e oferecidas para todos os clientes dentro da nossa loja.</p>
        </div>
        <div class="feature">
          <h3>Atualizações contínuas</h3>
          <p>Nós nos responsabilizamos de manter a acurácia do modelo de acordo com as mudanças naturais de processo (por exemplo, novos carros no mercado).</p>
        </div>
        <div class="feature">
          <h3>Sem prazo de fidelidade</h3>
          <p>Você paga pelo que usa e se não fizer mais sentido, você está livre para novos rumos.</p>
        </div>
        <div class="feature">
          <h3>Não encontrou o que precisava?</h3>
          <p>Nosso time está pronto pra te atender. Peça o seu modelo customizado com a possibilidade de desenvolvimento completamente gratuito.</p>
        </div>
        <div class="feature">
          <h3>Facilidade no gerenciamento e pagamento</h3>
          <p>Acompanhe as suas requisições e cobranças mensais dentro da nossa plataforma de gestão para os usuários.</p>
        </div>
        <div class="feature">
          <h3>Precisa de um produto exclusivo?</h3>
          <p>Necessita de mais privacidade? Também desenvolvemos APIs para o seu uso exclusivo.</p>
        </div>
      </language-panel>
    </div>
    <div class="testimonials">
      <language-panel code="en_us">
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
      </language-panel>
      <language-panel code="pt_br">
        <div class="testimonial">
          <blockquote>Como funcionam as APIs? Como posso ter acesso?</blockquote>
          <h5>As APIs são divididas e grandes 7 grupos: Animal, Comida, Humano, Medicina, Planta, Segurança e Veículos. Estes grupos foram selecionados entre os mais básicos para desenvolvimento inicial da nossa plataforma. Para utilizá-las você precisa ter cadastro e acesso à chave de requisições. Nesta versão beta as chaves são oferecidas sob demanda. Peça a sua chave de acesso!</h5>
        </div>
        <div class="testimonial">
          <blockquote>Qual é o custo de uso da plataforma e API?</blockquote>
          <h5>O custo da plataforma é de R$ x,00 mensais. Esse valor é pago apenas quando você cria a chave para acesso nas APIs. Além do custo mensal, você paga por requisições feitas por APIs (veja nossa página de Produtos para saber os valores de cada uma). O extrato mensal de pagamentos e requisições podem ser vistos no perfil.</h5>
        </div>
        <div class="testimonial">
          <blockquote>Por que preciso pagar uma mensalidade para usar a plataforma?</blockquote>
          <h5>Para oferecermos uma melhor experiência de uso para os nossos clientes, precisamos manter ambientes de software e ferramentas de suporte funcionando e prontos para escalabilidade do seus processos. Um dos nossos valores é transparência e aqui não queremos esconder rentabilidade abusivas. Nosso foco é oferecer qualidade e agilidade para os seus processos.</h5>
        </div>
        <div class="testimonial">
          <blockquote>E se a API não funcionar?</blockquote>
          <h5>Nosso sistema detecta todos os erros internos das nossas APIs e, quando isso ocorre, não há acréscimos nas contagens de requisições.</h5>
        </div>
        <div class="testimonial">
          <blockquote>Como posso obter meu modelo customizado sem custos de desenvolvimento?</blockquote>
          <h5>Todas as requisições de customização de modelos são análisadas pelos nossos times antes de qualquer precificação final. Modelos já em desenvolvimento pelo time ou de simples concepção podem sair sem custos para os nossos clientes.</h5>
        </div>
        <div class="testimonial">
          <blockquote>Como sei que a plataforma é segura para adicionar o meu cartão de crédito?</blockquote>
          <h5>Nós não mantemos a sua informação de cartão de crédito salvas em nosso banco de dados. Além disso, temos as certificações de segurança que comprovam a identidade e integridade da empresa.</h5>
        </div>
      </language-panel>
    </div>
    <div class="shout">
      <div class="">
        <language-panel code="en_us">
          <p>Let's build something together!</p>
        </language-panel>
        <language-panel code="pt_br">
          <p>Venha fazer um teste conosco!</p>
        </language-panel>
        <link-button href="/register" label="start-now" />
      </div>
    </div>
  </full-page>
</template>

<style lang="scss" scoped>
.features {
  @include flex(row);
  @include flex-evenly;

  flex-wrap: wrap;
  padding: 1em;

  @media (max-width: $sm) {
    align-items: center;
    justify-content: space-around;
  }

  .feature {
    max-width: 30vw;
    text-align: center;

    @media (max-width: $sm) {
      max-width: 80vw;
    }

    h3 {
      font-size: 1.5em;
      font-weight: 400;
    }

    p {
      font-size: 1.25em;
      font-weight: 200;
    }
  }
}

.graphic {
  height: auto;
  width: 40vw;

  @media (max-width: $sm) {
    width: 80vw;
  }
}

.shout {
  @include flex(column);
  @include flex-center;

  flex: 1;
  font-size: 4em;
  padding: 0 5em;
  text-align: center;

  @media (max-width: $sm) {
    padding: 0 1em;
  }

  p {
    margin: 0;
  }
}

.slogan {
  @include flex(column);
  @include flex-center;

  @media (max-width: $sm) {
    max-width: 80vw;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
}

.testimonials {
  @include flex(row);
  @include flex-center;

  background-color: $gray;
  padding: 3em 0;

  .testimonial {
    @include box;

    background-color: $white;
    padding: 2em;
    max-width: 20vw;

    @media (max-width: $sm) {
      max-width: 80vw;
    }

    h5 {
      padding-right: 2em;
      text-align: center;
    }
  }
}
</style>
