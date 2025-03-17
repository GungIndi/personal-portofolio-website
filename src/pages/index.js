import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import '@fortawesome/fontawesome-free/css/all.min.css';

function HomepageHeader() {
  return (
    <header
      id="profile-header"
      className="profile-cover js-fullheight"
      role="banner"
      style={{ backgroundImage: `url('/img/header.png')` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="header-body text-center">
            <div className="display-t">
              <div className="display-tc animate-box" data-animate-effect="fadeIn">
                <div
                  className="profile-thumb"
                  style={{ backgroundImage: `url('/img/gungindi.png')` }}
                ></div>
                <h1><span>Indi Kusuma</span></h1>
                <h3><span>DevOps Engineer / Student</span></h3>
                <ul className="profile-social-icons">
                  <li>
                    <a href="https://wa.me/6281339987413">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:gungindikusumaputra@gmail.com">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/anak-agung-indi-kusuma-putra/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/gungindi">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutpageContent(){
  return (
    <div id="about" class="animate-box">
		<div class="container">
			<div class="row">
				<div class="text-center about-heading">
					<h2>About Me</h2>
				</div>
			</div>
			<div class="row">
				<div class="about-one with-padding">
					<ul class="info">
						<li><span class="first-block">Name:</span><span class="second-block">Agung Indi Kusuma Putra</span></li>
						<li><span class="first-block">Phone:</span><span class="second-block">+62 81339987413</span></li>
						<li><span class="first-block">Email:</span><span class="second-block">gungindikusumaputra@gmail.com</span></li>
						<li><span class="first-block">Study:</span><span class="second-block">Udayana University</span></li>
						<li><span class="first-block">Region:</span><span class="second-block">Denpasar, Bali</span></li>						
					</ul>
				</div>
				<div class="about-two">
					<h2>Hello There!</h2>
					<p>As a 5th Semester Information Technology student, I have a strong passion for DevOps, and Cloud Engineering. My journey in these involves hands-on experience in Linux (Ubuntu), Docker, Cloud Platform (GCP & Little bit of AWS) and CI/CD tools like Jenkins and GitHub Actions, I get into on automation, scalability, and container orchestration with Kubernetes.</p>
					<p>I'm exploring software automation with CI/CD tools such as Jenkins, GitHub Actions, and GitLab CI, where I develop pipelines to automate workflows. Additionally, I’m expanding my knowledge in Kubernetes to better understand container orchestration. My participation in Capture The Flag (CTF) competitions keeps my security and troubleshooting skills sharp. I’m currently seeking an internship or job to further sharpen my skills, as I have a deep love for learning and am eager to continue developing my expertise in DevOps, and Cloud Server management.</p>
					<p>
						<ul class="about-social-icons">
							<li>
                <a href="https://wa.me/6281339987413">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="mailto:gungindikusumaputra@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anak-agung-indi-kusuma-putra/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/gungindi">
                  <i className="fab fa-github"></i>
                </a>
              </li>
							<li>
                <a href="https://drive.google.com/file/d/1HEnEpdMRxBBpkW7V8ojQcrRsR5aoLLpI/view?usp=sharing"class="btn btn-download download-cv" download>
                <i className="fas fa-file-download"></i>  Download CV
                </a>
              </li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	</div>
  );
}


function ExperiencePageContent(){
  return (
    <div id="experience">
		<div class="container">
			<div class="row">
					<ul class="timeline">
						<li class="timeline-heading text-center">
							<div><h3>Experience</h3></div>
						</li>
						<li class="timeline-unverted">
							<div class="timeline-badge"><i class="fas fa-briefcase"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Cloud Engineer</h3>
									<span class="company">Bangkit Academy | Sep 2024 - Jan 2025</span>
								</div>
								<div class="timeline-body">
									<ul>
											<li>Engaged an intensive cloud computing program covering infrastructure, networking, security, DevOps, and cloud-native development.</li>
											<li>Working as a team to develop project <a href="https://github.com/Memotions">Memotions</a> as Cloud Engineer, developing a Machine Learning API using FastAPI, leveraging Vertex AI for Generative AI, and implementing a GitHub Actions workflow for continuous integration and deployment.</li>
									</ul>
							  </div>
              </div>
						</li>
						<li class="timeline-inverted">
							<div class="timeline-badge"><i class="fas fa-briefcase"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Vice Chairman I</h3>
									<span class="company">Technology Artisan Udayana - Des 2024 - Des 2025</span>
								</div>
								<div class="timeline-body">
									<ul>
											<li>Overseeing three key divisions: publication, infrastructure, and competition division.</li>
											<li>Responsible for ensuring the organization perfoms optimally, guiding their activities and ensuring overall growth and development.</li>
									</ul>
								</div>
							</div>
						</li>
						<br></br>
						<li class="timeline-heading text-center">
							<div><h3>Education</h3></div>
						</li>
						<li class="animate-box timeline-unverted">
							<div class="timeline-badge"><i class="fas fa-graduation-cap "></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Bachelor's Degree<br></br> Information Technology</h3>
									<span class="company">Udayana University - 2022 - 2026</span>
								</div>
								<div class="timeline-body">
									<p>Gaining in-depth knowledge of software development, cloud computing, DevOps, and cybersecurity. Engaged in hands-on projects, research, and real-world applications to enhance technical and problem-solving skills.</p>
								</div>
							</div>
						</li>
			    	</ul>
			</div>
		</div>
	</div>
  );
}

function SkillsPageContent(){
  return (
    <div id="skills">
      <div class="container">
        <div class="row">
          <div class="text-center skills-heading">
            <h2>SKILLS</h2>
          </div>
        </div>
        <div className="skills-container">
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Logo" class="skill-logo"/>
            <h3>Docker</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux Logo" class="skill-logo"/>
            <h3>Linux</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" class="skill-logo"/>
            <h3>Python</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI Logo" class="skill-logo"/>
            <h3>FastAPI</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes Logo" class="skill-logo"/>
            <h3>Kubernetes</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="NGINX Logo" class="skill-logo"/>
            <h3>NGINX</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions Logo" class="skill-logo"/>
            <h3>GitHub Actions</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" class="skill-logo"/>
            <h3>JavaScript</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" class="skill-logo"/>
            <h3>Node.js</h3>
          </div>	
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django Logo" class="skill-logo"/>
            <h3>Django</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins Logo" class="skill-logo"/>
            <h3>Jenkins</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud Logo" class="skill-logo"/>
            <h3>Google Cloud</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Logo" class="skill-logo"/>
            <h3>PostgreSQL</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Logo" class="skill-logo"/>
            <h3>MySQL</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" class="skill-logo"/>
            <h3>MongoDB</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash Logo" class="skill-logo"/>
            <h3>Bash</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" alt="Prometheus Logo" class="skill-logo"/>
            <h3>Prometheus</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="Grafana Logo" class="skill-logo"/>
            <h3>Grafana</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform Logo" class="skill-logo"/>
            <h3>Terraform</h3>
          </div>
          <div class="skill-text">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Swarm Logo" class="skill-logo"/>
            <h3>Docker Swarm</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <AboutpageContent />
        <ExperiencePageContent />
        <HomepageFeatures />
        <SkillsPageContent />
      </main>
    </Layout>
  );
}
