
function main(jobTitle, yearsOfExperience) {
    let accessLevel;
    if (jobTitle === 'Manager') {
        accessLevel = 'Full Access';
        return accessLevel
    }
    else {
        if (jobTitle === 'Supervisor' && yearsOfExperience >= 5) {
            accessLevel = 'Full Access';
        }
        else {
            accessLevel = 'Partial Access';
        }

        if (jobTitle === 'Associate' && yearsOfExperience >= 3) {
            accessLevel = 'Partial Access';
        }
        else {
            accessLevel = 'Limited Access';
        }

        if (yearsOfExperience >= 2) {
            accessLevel = 'Limited Access'
        }
        else {
            accessLevel = 'Trainee Access'
        }
    }
    return accessLevel;
}
