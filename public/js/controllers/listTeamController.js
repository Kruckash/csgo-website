function listTeamController(teamService, playerService) {

    this.playerService = playerService;
    this.teamService = teamService;

    this.load = () => {
        this.teamService.getAll().then((res) => {
            this.teams = res.data;
        });
    };

    this.load();
}
