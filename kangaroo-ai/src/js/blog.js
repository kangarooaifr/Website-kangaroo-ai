// JavaScript Document

console.log("[JavaScript] >> blog.js")

// Get category from HTML
category = document.getElementById("blogCategory");
if (category != null){
	category = category.innerHTML};
console.log("Category = ", category);

// Get project from HTML
project = document.getElementById("blogProject");
if (project != null){
	project = project.innerHTML};
console.log("Project = ", project);


// ** DEBUG **
//project = "text";
//category = "Dummy";


// Get sidebar project Element
projectCard = document.getElementById("projectCard");
if(project != "none"){
	// show (hidden by default)
	projectCard.style.display = "block";
	}

// Get sidebar latest post Element
latestPost = document.getElementById("latestPost");

// Get sidebar related post Element
relatedPost = document.getElementById("relatedPost");

// -- Call function
getJson()


// -- Helper functions Section -------------------------------------------------------------------------------------------

// -- Helper function: request the JSON file from server
function getJson(){

	console.log("Loading blog article list...");

	var requestURL = 'https://kangarooaifr.github.io/kangaroo-factory/src/json/blog_articles.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
  		var feeback = request.response;
		articles = feeback['articles'];

		// -- DEBUG!
  		//console.log(articles);

		// -- Do stuff with the JSON (it must be done inside the callback)
		updateLastPosts(articles);
		updateRelatedPost(articles);
		if(project != null){
			updateProjectPost(articles)}
		}
}


// -- Sidebar: update last post section
function updateLastPosts(articles){

	console.log("Nb of articles = ", articles.length);

	// append content (arbitrary adding 3)
	for (var i = 0; i < 3; i++) {

		if (i != 0){
			var line_break = document.createElement("hr");
			line_break.className = "blog-sidebar-linebreak";
			latestPost.appendChild(line_break);
		}

		var element = buildBlogTeaser(articles[i]);
		latestPost.appendChild(element);

	}

	// make it visible
	latestPost.style.opacity = 1;

}


// -- Sidebar: update related post (category)
function updateRelatedPost(articles){

	// get list of related posts
	var relatedPosts =  articles.filter(function(article) {
    	return article.category == category;
		});

	console.log("Nb of related articles = ", relatedPosts.length);

	// append content
	for (var i = 0; i < relatedPosts.length; i++) {

		var element = buildBlogTeaser(relatedPosts[i]);
		relatedPost.appendChild(element);

		if (i < relatedPosts.length - 1){
			var line_break = document.createElement("hr");
			line_break.className = "blog-sidebar-linebreak";
			relatedPost.appendChild(line_break);
		}
	}

	// make it visible
	relatedPost.style.opacity = 1;

}


// -- Sidebar: update project related post
function updateProjectPost(articles){

	// get project projectPosts
	var projectPosts =  articles.filter(function(article) {
    	return article.project == project;
		});

	console.log("Nb of project articles = ", projectPosts.length);

	// adding content
	for (var i = 0; i < projectPosts.length; i++) {

		var element = buildBlogTeaser(projectPosts[i]);
		projectCard.appendChild(element);

		if (i < projectPosts.length - 1){
			var line_break = document.createElement("hr");
			line_break.className = "blog-sidebar-linebreak";
			projectCard.appendChild(line_break);
		}
	}

	// make it visible
	projectCard.style.opacity = 1;

}


// -- Build HTML functions  -------------------------------------------------------------------------------------------

// -- Build Article Teaser
function buildBlogTeaser(post){

	// build link from title
	var link = post.title;
	link = link.replace(/\s+/g, '-').toLowerCase();
	link = "./poc_blog_" + link + ".html"

	var img = document.createElement("img");
	img.alt = "Post preview";
	img.src = "../src/img/blog/headers/" + post.header + ".png";

	var a_tag = document.createElement("a");
	a_tag.href = link;
	a_tag.target = "_self";
	a_tag.appendChild(img);

	var div_teaser_preview = document.createElement("div");
	div_teaser_preview.className = "blog-teaser-preview";
	div_teaser_preview.appendChild(a_tag);

	var teaser_title = document.createElement("h2");
	teaser_title.innerHTML = post.title;

	var a_title = document.createElement("a");
	a_title.href = link;
	a_title.target = "_self";
	a_title.appendChild(teaser_title);

	var teaser_date = document.createElement("p");
	teaser_date.innerHTML = post.date;

	var div_teaser_body = document.createElement("div");
	div_teaser_body.className = "blog-teaser-body";
	div_teaser_body.appendChild(a_title);
	div_teaser_body.appendChild(teaser_date);

	var div_teaser = document.createElement("div");
	div_teaser.className = "blog-teaser";
	div_teaser.appendChild(div_teaser_preview);
	div_teaser.appendChild(div_teaser_body);

	return div_teaser;

}
