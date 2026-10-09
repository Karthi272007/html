
<!DOCTYPE html>
<html>
<head>
    <title>Bootstrap Tasks</title>

    <!-- Bootstrap CDN -->
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet">
</head>

<body>

    <!-- Task 1: Setup a New Project -->
    <!-- Create a container and check Bootstrap styling -->

    <div class="container mt-3">
        <h1 class="text-primary">Hello Bootstrap!</h1>
        <p class="bg-light p-3">Bootstrap is working.</p>
    </div>


    <!-- Task 2: Create a Responsive 3-Column Layout -->
    <!-- 3 columns on large screens and stacked on small screens -->

    <div class="container mt-3">
        <div class="row">

            <div class="col-lg-4 col-12 bg-primary text-white p-3">
                Column 1
            </div>

            <div class="col-lg-4 col-12 bg-success text-white p-3">
                Column 2
            </div>

            <div class="col-lg-4 col-12 bg-danger text-white p-3">
                Column 3
            </div>

        </div>
    </div>


    <!-- Task 3: Create a Nested Row with Two Sub-Columns -->
    <!-- Add a row inside one column -->

    <div class="container mt-3">
        <div class="row">

            <!-- Main Column -->
            <div class="col-md-8 bg-primary text-white p-3">
                Main Column

                <!-- Nested Row -->
                <div class="row mt-2">

                    <div class="col-6 bg-warning text-dark p-3">
                        Sub Column 1
                    </div>

                    <div class="col-6 bg-success text-white p-3">
                        Sub Column 2
                    </div>

                </div>
            </div>

            <!-- Other Column -->
            <div class="col-md-4 bg-danger text-white p-3">
                Other Column
            </div>

        </div>
    </div>

</body>
</html>
