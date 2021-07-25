class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }
    showProfile(user){
        this.clearAlert();
        this.profile.innerHTML = `
            <div class="card card-body mb-3" style="background-color:black; color:white;">
                <div class="row" style="background-color:black; color:white;"> 
                    <div class="col-md-3" style="background-color:black; color:white;">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" style="background-color:black; color:white;"> 
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"> View Profile</a>
                    </div>
                    <div class="col-md-9" style="background-color:black; color:white;">
                        <span class="badge badge-primary" >Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary" >Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success" >Followers: ${user.followers}</span>
                        <span class="badge badge-info" >Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group" style="background-color:black; color:white;">
                            <li class="list-group-item" style="background-color:black; color:white;">Company: ${user.company}</li>
                            <li class="list-group-item" style="background-color:black; color:white;">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item" style="background-color:black; color:white;">Location: ${user.location}</li>
                            <li class="list-group-item" style="background-color:black; color:white;">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
    showAlert(message, className){
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div,search);
    }
    clearAlert(){
        let currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}