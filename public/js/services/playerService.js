function playerService($http) {

    this.$http = $http;

    this.create = (player) => {
      console.log(player);
        return this.$http.post('/api/players', player)
    }

    this.getAll = () => {
        return this.$http.get('/api/players')
    }

    this.getOne = (id) => {
        return this.$http.get('/api/players/' + id)
    }

    this.update = (id, player) => {
        return this.$http.put('/api/players/' + id, player)
    }

    this.delete = (id) => {
        return this.$http.delete('/api/players/' + id)
    }

}
