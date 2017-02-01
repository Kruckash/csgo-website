function teamService($http) {

    this.$http = $http;

    this.create = (team) => {
        return this.$http.post('/api/teams', team)
    }

    this.getAll = () => {
        return this.$http.get('/api/teams')
    }

    this.getOne = (id) => {
        return this.$http.get('/api/teams/' + id)
    }

    this.update = (id, team) => {
        return this.$http.put('/api/teams/' + id, team)
    }

    this.delete = (id) => {
        return this.$http.delete('/api/teams/' + id)
    }

    this.addPlayerToTeam = (teamID, playerID) => {
        return this.$http.put('/api/teams/addPlayer', {
            teamID,
            playerID
        })
    }
}
