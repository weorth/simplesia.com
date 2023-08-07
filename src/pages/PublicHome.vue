
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
          <h2>We take care of the Artificial Intelligence tools while you focus on your products </h2>
          <h3>Ready to go or upon demand!</h3>
        </language-panel>
        <language-panel code="pt_br">
          <h1>As APIs inteligentes do seu negócio</h1>
          <h2>Nós cuidamos das ferramentas de Inteligência Artificial enquanto você foca nos seus produtos</h2>
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
          <h3>No vendor lock-in</h3>
          <p>You pay for what you use and once it does not make sense anymore, you are free to go.</p>
        </div>
        <div class="feature">
          <h3>Couldn't find what you need?</h3>
          <p>Our team is ready to work with you. Order your customized model with the possibility of getting it for free.</p>
        </div>
        <div class="feature">
          <h3>Easy pay and manage your account</h3>
          <p>Follow up your monthly invoices and requests inside our platform for users.</p>
        </div>
        <div class="feature">
          <h3>Do you need an exclusive product?</h3>
          <p>Is more privacy required? We also develop APIs for your own usage.</p>
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
          <h3>Sem fidelização</h3>
          <p>Você paga pelo que usa e se não fizer mais sentido, você está livre para novos rumos.</p>
        </div>
        <div class="feature">
          <h3>Não encontrou o que precisa?</h3>
          <p>Nosso time está pronto pra te atender. Peça o seu modelo customizado com a possibilidade de desenvolvimento completamente gratuito.</p>
        </div>
        <div class="feature">
          <h3>Facilidade no pagamento e gerenciamento da sua conta</h3>
          <p>Acompanhe as suas requisições e cobranças mensais dentro da nossa plataforma para os usuários.</p>
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
          <blockquote>How can I access the APIs?</blockquote>
          <h5>The APIs are divided into seven major groups: Animal, Food, Human, Medical, Plant, Security, and Vehicles. These groups were selected among the most basic ones for initial development in our platform. To use our APIs you need to register and access the key for requests. In this beta version the keys are offered under demand. Ask yours!</h5>
        </div>
        <div class="testimonial">
          <blockquote>What is the cost to use the platform and APIs?</blockquote>
          <h5>The price of the platform is U$x.00 per month. This value is paid only when you create the key to access the APIs. Besides the monthly costs, you pay the number of requests in each API (see our Product page to know the values). The monthly extract for payments and requests can be seen in your profile.</h5>
        </div>
        <div class="testimonial">
          <blockquote>Why do I have to pay a monthly fee to use the platform?</blockquote>
          <h5>In order to offer a better experience to all of our customers, we need to keep software environments and managing tools working and ready to automatically scale according to your process. We are transparent and we do not want to hide abusive profits, but offer quality and agility to you.</h5>
        </div>
        <div class="testimonial">
          <blockquote>What if the API request does not work?</blockquote>
          <h5>Our system detects all errors caused internally and does not add count on your amount of total requests.</h5>
        </div>
        <div class="testimonial">
          <blockquote>How can I get my customized model without any development costs?</blockquote>
          <h5>All of customization requests are assessed by our team before the final pricing. Models already under development or models of simple conceptions might be for free to our clients.</h5>
        </div>
        <div class="testimonial">
          <blockquote>Is it safe to add my credit card on my account?</blockquote>
          <h5>We do not keep your credit card information on our database. Moreover, we have all of the certificates that proof the identity and integrity of the company.</h5>
        </div>
      </language-panel>
      <language-panel code="pt_br">
        <div class="testimonial">
          <blockquote>Como eu posso ter acesso às APIs?</blockquote>
          <h5>As APIs são divididas em sete grandes grupos: Animal, Comida, Humano, Medicina, Planta, Segurança e Veículos. Estes grupos foram selecionados entre os mais básicos para desenvolvimento inicial da nossa plataforma. Para utilizá-las você precisa ter cadastro e acesso à chave de requisições. Nesta versão beta as chaves são oferecidas sob demanda. Peça a sua chave de acesso!</h5>
        </div>
        <div class="testimonial">
          <blockquote>Qual é o custo de uso da plataforma e APIs?</blockquote>
          <h5>O custo da plataforma é de R$ x,00 mensais. Esse valor é pago apenas quando você cria a chave para acesso nas APIs. Além do custo mensal, você paga por requisições feitas por APIs (veja nossa página de Produtos para saber os valores de cada uma). O extrato mensal de pagamentos e requisições podem ser vistos no seu perfil.</h5>
        </div>
        <div class="testimonial">
          <blockquote>Por que preciso pagar uma mensalidade para usar a plataforma?</blockquote>
          <h5>Para oferecermos uma melhor experiência de uso para os nossos clientes, precisamos manter ambientes de software e ferramentas de suporte funcionando e prontos para escalabilidade automática dos seus processos. Nós não queremos esconder rentabilidade abusivas, apenas focamos em oferecer qualidade e agilidade para você.</h5>
        </div>
        <div class="testimonial">
          <blockquote>E se a requisição da API não funcionar?</blockquote>
          <h5>Nosso sistema detecta todos os erros causados internamente e não acrescenta contagem nas requisições totais.</h5>
        </div>
        <div class="testimonial">
          <blockquote>Como posso obter meu modelo customizado sem custos de desenvolvimento?</blockquote>
          <h5>Todas as requisições de customização de modelos são análisadas pelos nossos times antes de qualquer precificação final. Modelos já em desenvolvimento ou de simples concepção podem sair sem custos para os nossos clientes.</h5>
        </div>
        <div class="testimonial">
          <blockquote>É seguro adicionar um cartão de crédito na minha conta?</blockquote>
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
