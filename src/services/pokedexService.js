export function getPokeData() {
	var getUrl = baseUrl +'/v2/pokemon/' + pokeId;
	$.ajax({
      url: getUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(getUrl, status, err.toString());
      }.bind(this)
		});
	
	console.log(this.state.data);
	var pokeGeneral = this.state.data;
	var pokeStat = this.state.data.stats;
	var pokeType = this.state.data.types;
	console.log(pokeGeneral.name);
	console.log(pokeGeneral.id);
	console.log(pokeStat);
	console.log(pokeType);
}

export function	getPokeSpecies() {
	var getUrl = baseUrl +'/v2/pokemon-species/' + pokeId;
	$.ajax({
      url: getUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(getUrl, status, err.toString());
      }.bind(this)
		});
    var pokeSpecies = this.state.data.genera[0].genus;
    var pokeDesc = this.state.data.flavor_text_entries[1].flavor_text;
		return pokeDesc;
		console.log(pokeSpecies);
		console.log(pokeDesc);
}