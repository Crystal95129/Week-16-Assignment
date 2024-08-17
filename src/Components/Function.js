//class of Activites, added Image URL to upgrade the project using Json prefixed data support. 

class Activity {
    constructor(name, imageURL){
        this.name = name;
        this.activityImage = imageURL
        this.sessions = [];
    }

    addSession(name, age){
        this.sessions.push(new Session(name, age));
    }
}

// class of Session
class Session {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}


// class for activities functions like display activities, add activities,create activities,delete activities. 
class ActivityService{
    static url = 'http://localhost:3000/activites/';

    static getAllActivities(){
        return $.get(this.url);
    }

    static getActivity(id) {
        return $.get(this.url + `/${id}`);
    }

    static createActivity(activity){
        return $.post(this.url, activity);
    }

    static updateActivity(activity, newSession) {
// console.log("Updating activity with new session...", activity, "new session data...", newSession);
    let activityId = activity._id

        return $.ajax({
            url: this.url + `/${activityId}/session`,
            dataType: 'json',
            data: JSON.stringify(newSession),
            contentType: 'application/json',
            type: 'POST'
        });
    }

    /*
    deleting a session takes the activity id and the id of the session
    ie. activity and sessionToDelete
    */
    static deleteSession(activity, sessionToDelete) {
// console.log("Updating activity with new session...", activity, "new session data...", sessionToDelete);to test the delete function for session,testing.
        let activityId = activity._id

        // CTRL + / will create a single line comment.
                return $.ajax({
                    url: this.url + `/${activityId}/session/${sessionToDelete}`,
                    dataType: 'json',
                    // data: JSON.stringify(sessionToDelete),
                    contentType: 'application/json',
                    type: 'DELETE'
                });
            }

    static deleteActivity(id){
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}


//DOM Manager to call up JQuery functions.

class DOMManager {
    static activities;

    static getAllActivities(){
        ActivityService.getAllActivities().then(activities => this.render(activities));
    }

    static createActivity(name, activityImage){
        ActivityService.createActivitiy(new Activity(name, activityImage))
        .then(() => {
            return ActivityService.getAllActivities();
        })
        .then((activities) => this.render(activities));
    }

    static deleteActivity(id){

        ActivityService.deleteActivity(id)
        .then(()=> {
            return ActivityService.getAllActivities();
        })
        .then((activities) => this.render(activities));
    }

    static addSession(id){
// console.log("adding a session...", id); to display added session, testing. 

        for (let activity of this.activities){
            if(activity._id == id){
                activity.sessions.push(new Session($(`#${activity._id}-session-name`).val(), $(`#${activity._id}-session-age`).val()));
                
                let newSessionData = {
                    name: $(`#${activity._id}-session-name`).val(),
                    age: $(`#${activity._id}-session-age`).val()
                }

                // console.log("activity Sessions:", activity);
                
                ActivityService.updateActivity(activity, newSessionData) 
                .then(() => {
                    return ActivityService.getAllActivities();
                })
                .then((activities) => this.render(activities));
            }
        }
    }

    static deleteSession(activityId, sessionId) {
// console.log("Deleting a session....", activityId, sessionId);

        for (let activity of this.activities) {
            if (activity._id == activityId) {
                for (let session of activity.sessions){
                    console.log("Session:", session);
                    if (session.sessionId == sessionId) {
                        activity.sessions.splice(activity.sessions.indexOf(session), 1);
                        ActivityService.deleteSession(activity, sessionId)
                        .then(()=> {
                            return ActivityService.getAllActivities();
                        })
                        .then((activities) => this.render(activities));
                    }
                }
            }
        }
    }

    static render(activities){
        this.activities = activities;
        $('#app').empty();
        for(let activity of activities) {
// console.log("Acitivity:", activity);

            $('#app').prepend(
                `<div id="${activity._id}" class="card">
                    <div class="card-header">
                        <h2>${activity.name}</h2>
                        <img src=${activity.activityImage} style="width: 25%;"/>
                        <button class="btn btn-danger" onclick="DOMManager.deleteActivity('${activity._id}')">Delete</button>
                    </div><br>
                    <div class="card-body">
                        <div class="card">
                            <div class="row">
                                <h4>Add New Session</h4>
                                <div class="col-sm">
                                 <input type="text" id="${activity._id}-session-name" class="form-control" placeholder="Session Name">
                                </div>
                                <div class="col-sm">
                                <input type="text" id="${activity._id}-session-age" class="form-control" placeholder="Session Age">
                                </div>
                            </div>
                            <button id="${activity._id}-new-session" onclick="DOMManager.addSession('${activity._id}')" class="btn btn-primary form-control">Add</button>
                        </div>
                    </div>
                </div><br>`
            );
            for (let session of activity.sessions) {
// console.log("Session:", session);

                $(`#${activity._id}`).find('.card-body').append(
                    `<p>
                    <span id="name-${activity._id}"><strong>Name: </strong> ${session.name}</span>
                    <span id="age-${activity._id}"><strong>Age: </strong> ${session.age}</span>
                    <button class="btn btn-danger" onclick="DOMManager.deleteSession('${activity._id}', '${session.sessionId}')">Delete Session</button>
                    `
                )
            }
        }
    }
}

$('#create-new-activity').on("click", () => {
    //when creating a activity, takes in with jquery val() method a name and image url
    DOMManager.createActivity($('#new-activity-name').val(), $('#activity-image-url').val());
    $('#new-activity-name').val('');
});

DOMManager.getAllActivities(); 