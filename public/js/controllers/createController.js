function createController(teamService, playerService) {

    this.playerService = playerService;
    this.teamService = teamService;

    this.display = {
        "createTeam": false,
        "createPlcreatePlayerayer": false
    };

    this.showCreatePlayer = () => {
        this.display.createTeam = false;
        this.display.createPlayer = true;
    };

    this.showCreateTeam = () => {
        this.display.createPlayer = false;
        this.display.createTeam = true;
    };

    this.load = () => {
        this.teamService.getAll().then((res) => {
            this.teams = res.data;
            console.log(this.teams);
        });
        this.team = {};
        this.player = {};
    };

    this.createTeam = () => {
        this.teamService.create(this.team).then(() => {
            this.load();
        });
    };

    this.createPlayer = () => {
        this.playerService.create(this.player).then((res) => {
            this.playerID = res.data._id;
            this.addToTeam(this.player.team, this.playerID);
            this.load();
        });

    };

    this.addToTeam = (teamID, playerID) => {
        this.teamService.addPlayerToTeam(teamID, playerID).then(() => {});
    };

    this.load();
}
