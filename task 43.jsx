
<!-- Task 1 — Typography & Spacing
Add headings, paragraphs, and apply text utilities like .text-center, .text-primary.
Use spacing utilities (p-, m-) to style sections.
-->

<!DOCTYPE html>
<html>
<head>
    <title>Typography and Spacing</title>

    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>

<body>

<div class="container">

    <h1 class="text-center text-primary mt-4">
        Welcome to Bootstrap
    </h1>

    <h2 class="text-success mt-3">
        About Us
    </h2>

    <p class="text-center p-3 m-3 bg-light">
        This is a simple paragraph using Bootstrap spacing utilities.
    </p>

    <p class="text-primary">
        Bootstrap makes styling easy and simple.
    </p>

</div>

</body>
</html>


<!-- Task 2
Build a responsive navbar with brand name, links, and a collapsible toggle for mobile.
-->

<!DOCTYPE html>
<html>
<head>
    <title>Responsive Navbar</title>

    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>

<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">

        <a class="navbar-brand" href="#">MyWebsite</a>

        <!-- Mobile Toggle Button -->
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav ms-auto">

                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>

            </ul>
        </div>

    </div>
</nav>

<!-- Bootstrap JavaScript -->
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>


<!-- Task 3
Create a 3-card layout (using .card classes).
Each card should include an image, title, text, and button.
-->

<!DOCTYPE html>
<html>
<head>
    <title>Bootstrap Cards</title>

    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>

<body>

<div class="container mt-4">

    <div class="row">

        <!-- Card 1 -->
        <div class="col-md-4">
            <div class="card">
                <img src="https://via.placeholder.com/300x150"
                     class="card-img-top">

                <div class="card-body">
                    <h5 class="card-title">Card 1</h5>
                    <p class="card-text">This is the first card.</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="col-md-4">
            <div class="card">
                <img src="https://via.placeholder.com/300x150"
                     class="card-img-top">

                <div class="card-body">
                    <h5 class="card-title">Card 2</h5>
                    <p class="card-text">This is the second card.</p>
                    <button class="btn btn-success">Read More</button>
                </div>
            </div>
        </div>

        <!-- Card 3 -->
        <div class="col-md-4">
            <div class="card">
                <img src="https://via.placeholder.com/300x150"
                     class="card-img-top">

                <div class="card-body">
                    <h5 class="card-title">Card 3</h5>
                    <p class="card-text">This is the third card.</p>
                    <button class="btn btn-danger">Read More</button>
                </div>
            </div>
        </div>

    </div>

</div>

</body>
</html>
