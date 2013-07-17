var currentdate = new Date(); 
//var ideaArray = new Array();
var idea = {
	author : 'Peter Bernardi',
	desc : 'Test description that will one day be a lot longer',
	score : 0,
	name : 'Test idea 1',
	timestamp : currentdate.getHours() + ":" + currentdate.getMinutes(),
	comments : ['comment 1', 'comment 2', 'comment 3']
};
$(document).ready(function{
	$('section').append("
		<div class='idea'>
			<div class='voteWrap'>
				<div class='upvote'></div>
				<div class='voteCount'><p>' + idea.score + '</p></div>
			</div>
			<div class='ideaName'><h1>' + idea.name + '</h1></div>
			<div class='timestamp'><h2>Today at ' + idea.timestamp + '</h2></div>
			<div class='ideaDesc'><p>' + idea.desc + '</p></div>
			<div class='ideaAuthor'><h3>Submitted by ' + idea.author + '</h3></div>
			<div class='ideaComments'><h3>3 comments</h3></div>
		</div>
		");
});