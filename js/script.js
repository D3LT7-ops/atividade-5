// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {

  // 1. Animação fade-in para todos os main sections
  const mainSections = document.querySelectorAll('main section');
  mainSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1.2s ease-in-out';
    setTimeout(() => {
      section.style.opacity = 1;
    }, 200);
  });

  // 2. Menu ativo com efeito suave (assumindo que o .active está no HTML)
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#f39c12'; // cor laranja viva
      link.style.transition = 'color 0.3s ease';
    });
    link.addEventListener('mouseout', () => {
      if (!link.classList.contains('active')) {
        link.style.color = ''; // volta ao padrão
      }
    });
  });

  // 3. Botão do formulário muda cor ao passar o mouse
  const btnEnviar = document.querySelector('button[type="submit"]');
  if(btnEnviar){
    btnEnviar.addEventListener('mouseenter', () => {
      btnEnviar.style.backgroundColor = '#27ae60'; // verde mais forte
      btnEnviar.style.color = '#fff';
      btnEnviar.style.transition = 'background-color 0.3s ease';
    });
    btnEnviar.addEventListener('mouseleave', () => {
      btnEnviar.style.backgroundColor = '';
      btnEnviar.style.color = '';
    });
  }

  // 4. Validação simples do formulário
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', (e) => {
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();
      if(nome === '' || email === '' || mensagem === ''){
        e.preventDefault();
        alert('Por favor, preencha os campos nome, e-mail e mensagem.');
      }
    });
  }
});
