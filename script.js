const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const projects = {
  sf: {
    title: 'Global SuccessFactors Implementation',
    intro: 'A multinational HR transformation programme using SAP SuccessFactors.',
    bullets: [
      'Supported Employee Central implementation activities.',
      'Helped with requirements, testing and business validation.',
      'Collaborated with functional and technical teams.',
      'Supported go-live and post-go-live activities.'
    ]
  },
  cpi: {
    title: 'HR Systems Integration with SAP CPI',
    intro: 'Integration work connecting SAP SuccessFactors with external HR systems.',
    bullets: [
      'Supported CPI integration flows and interface design.',
      'Worked with data mapping and transformation requirements.',
      'Helped troubleshoot integration errors.',
      'Coordinated testing with upstream and downstream systems.'
    ]
  },
  migration: {
    title: 'Employee Data Migration',
    intro: 'Migration of employee data into SAP SuccessFactors Employee Central.',
    bullets: [
      'Supported data extraction and cleansing activities.',
      'Validated mappings between legacy and target structures.',
      'Assisted with test loads and reconciliation.',
      'Supported business validation before production load.'
    ]
  },
  analytics: {
    title: 'HR Reporting & Analytics',
    intro: 'Reporting solutions designed to improve HR visibility and decision-making.',
    bullets: [
      'Supported HR reporting requirements.',
      'Helped structure data for meaningful analysis.',
      'Built or supported dashboards and recurring reports.',
      'Worked with stakeholders to refine KPIs.'
    ]
  }
};

const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.project-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = projects[btn.dataset.project];
    modalContent.innerHTML = `<div class="eyebrow">Project Case Study</div>
      <h2>${p.title}</h2>
      <p>${p.intro}</p>
      <h3>What I contributed</h3>
      <ul>${p.bullets.map(x => `<li>${x}</li>`).join('')}</ul>
      <p><strong>Next:</strong> we can replace this placeholder content with your real project details, tools, challenges and results.</p>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') modal.classList.remove('open');
});
