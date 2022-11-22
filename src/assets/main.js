
const API = 'https://github-non-official-apis.p.rapidapi.com/fetch?url=https%3A%2F%2Fgithub.com%2FCristianc144'

const content = null || document.getElementById('content')
const githubIcon = document.getElementById('github-icon')
const linkedinIcon = document.getElementById('linkedin-icon')
const instagramIcon = document.getElementById('instagram-icon')

githubIcon.addEventListener('click',  ListenEvent)
linkedinIcon.addEventListener('click',  ListenEvent2)
instagramIcon.addEventListener('click',  ListenEvent3)

function ListenEvent() {
    window.location.href = 'https://github.com/Cristianc144'
}

function ListenEvent2() {
    window.location.href = 'https://www.linkedin.com/in/cristian-ferney-caicedo-castillo-a68646250/'
}

function ListenEvent3() {
    window.location.href = 'https://www.instagram.com/cristianc155/'
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a886bb4654msh9b890430bd879e2p15951fjsn7a3ce22b93d1',
		'X-RapidAPI-Host': 'github-non-official-apis.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
 const response = await fetch(urlApi, options)
 const data = await response.json()
 return data
}

(async () => {
    try{
        const publicaciones = await fetchData(API)
        let view = `
        ${publicaciones.repos.map(publicacion => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${publicacion.repoName}
                        ${publicacion.url}
                    </h3>
                </div>
            </div>
        `).slice(0,10).join('')}
        `;
        content.innerHTML = view
    }catch(error){
        console.error(error)
    }
})();