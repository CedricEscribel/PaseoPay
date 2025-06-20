<!DOCTYPE html>
<html lang="en">

<?php $pageTitle = "Homeowners"; ?>
<!-- Head Section -->
<?php include './pages/head.php' ?>

<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <?php include './pages/navigation.php' ?>


            <!-- Main Content -->
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Homeowners</h1>
                </div>

                <!-- Homeowners Content -->
                <div class="card mb-4">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-people me-1"></i>
                                Homeowners
                            </div>
                            <div>
                                <button class="btn btn-sm btn-primary">
                                    <i class="bi bi-person-plus me-1"></i>Add Homeowner
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search homeowners...">
                                <button class="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact Number</th>
                                        <th>Block/Lot</th>
                                        <th>Phase</th>
                                        <th>Registration Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Franz Rance</td>
                                        <td>franz.rance@email.com</td>
                                        <td>09123456789</td>
                                        <td>Block 1, Lot 5</td>
                                        <td>Phase 1</td>
                                        <td>Jan 15, 2025</td>
                                        <td>
                                            <button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#homeownerModal">View</button>
                                            <button class="btn btn-sm btn-warning">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maria Garcia</td>
                                        <td>maria.garcia@email.com</td>
                                        <td>09987654321</td>
                                        <td>Block 3, Lot 12</td>
                                        <td>Phase 2</td>
                                        <td>Feb 5, 2025</td>
                                        <td>
                                            <button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#homeownerModal">View</button>
                                            <button class="btn btn-sm btn-warning">Edit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Peter Santos</td>
                                        <td>peter.santos@email.com</td>
                                        <td>09564738291</td>
                                        <td>Block 2, Lot 8</td>
                                        <td>Phase 1</td>
                                        <td>Mar 20, 2025</td>
                                        <td>
                                            <button class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#homeownerModal">View</button>
                                            <button class="btn btn-sm btn-warning">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <!-- Homeowner Detail Modal -->
    <div class="modal fade" id="homeownerModal" tabindex="-1" aria-labelledby="homeownerModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="homeownerModalLabel">Homeowner Details - Franz Rance</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Personal Information</h6>
                            <p><strong>Full Name:</strong> Franz Rance</p>
                            <p><strong>Email:</strong> franz.rance@email.com</p>
                            <p><strong>Contact Number:</strong> 09123456789</p>
                            <p><strong>Registration Date:</strong> Jan 15, 2025</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Property Information</h6>
                            <p><strong>Block/Lot:</strong> Block 1, Lot 5</p>
                            <p><strong>Phase:</strong> Phase 1</p>
                            <p><strong>House Type:</strong> Single Detached</p>
                            <p><strong>Property Status:</strong> Active</p>
                        </div>
                    </div>
                    <hr>
                    <h6>Payment Summary</h6>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card text-center mb-3">
                                <div class="card-header">House Amortization</div>
                                <div class="card-body">
                                    <h5 class="card-title">₱1,425,000</h5>
                                    <p class="card-text">Remaining Balance</p>
                                    <button class="btn btn-sm btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center mb-3">
                                <div class="card-header">HOA Dues</div>
                                <div class="card-body">
                                    <h5 class="card-title">₱0</h5>
                                    <p class="card-text">Current Balance</p>
                                    <button class="btn btn-sm btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center mb-3">
                                <div class="card-header">Garbage Collection</div>
                                <div class="card-body">
                                    <h5 class="card-title">₱0</h5>
                                    <p class="card-text">Current Balance</p>
                                    <button class="btn btn-sm btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-warning">Edit Information</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/homeowners.js"></script>
</body>

</html>