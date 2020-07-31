/* 

should receive currentUser 
<Route exact path="/" component={BodyContainer} />

this should be similar to what's needed for a logged in puzzle page:


Define a <ProtectedRoute> helper method in your route_util.js. It should:
Check to see if the application state has a currentUser property. You can use the loggedIn boolean like we did in our AuthRoute component.
If true, render the component.
Otherwise, Redirect to "/login".

<ProtectedRoute exact path="benches/new" component="{BenchFormContainer}" />

and ultimately this should be similar to rendering the actual puzzle's page

a full-body component that displays the puzzle and its accompanying info
should mount when a user clicks on the icon on the splash page or on
the link in the nav drawer

create a new Route for PuzzleContainer that has a puzzleId param

*/