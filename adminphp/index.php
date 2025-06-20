<!DOCTYPE html>
<html lang="en">


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
                    <h1 class="h2">Dashboard</h1>
                </div>

                <!-- Dashboard Content -->
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card border-left-primary h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <div class="h5 mb-0 font-weight-bold text-primary">Registered Homeowners</div>
                                        <div class="h2 mt-2 stat-number">150</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-people icon-large text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card border-left-success h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <div class="h5 mb-0 font-weight-bold text-success">Paid Payments</div>
                                        <div class="h2 mt-2 stat-number">10</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-cash-coin icon-large text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card border-left-danger h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <div class="h5 mb-0 font-weight-bold text-danger">Over Dues</div>
                                        <div class="h2 mt-2 stat-number">3</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-exclamation-circle icon-large text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="bi bi-clock-history me-1"></i>
                                Recent Payment Activity
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>Amortization Payment</strong>
                                            <div class="small text-muted">Franz Rance (Block 1, Lot 5)</div>
                                        </div>
                                        <span class="badge bg-success">₱7,500</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>HOA Dues</strong>
                                            <div class="small text-muted">Maria Garcia (Block 3, Lot 12)</div>
                                        </div>
                                        <span class="badge bg-success">₱400</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>Garbage Collection</strong>
                                            <div class="small text-muted">Peter Santos (Block 2, Lot 8)</div>
                                        </div>
                                        <span class="badge bg-success">₱200</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="bi bi-person-check me-1"></i>
                                Pending Homeowner Approvals
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>Carlos Rodriguez</strong>
                                            <div class="small text-muted">Block 4, Lot 15 - Phase 2</div>
                                        </div>
                                        <span class="badge bg-warning">Pending</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>Ana Dela Cruz</strong>
                                            <div class="small text-muted">Block 2, Lot 20 - Phase 1</div>
                                        </div>
                                        <span class="badge bg-warning">Pending</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>Miguel Santos</strong>
                                            <div class="small text-muted">Block 3, Lot 8 - Phase 2</div>
                                        </div>
                                        <span class="badge bg-warning">Pending</span>
                                    </li>
                                </ul>
                                <div class="text-center mt-3">
                                    <a href="homeowner-approvals.html" class="btn btn-sm btn-primary">
                                        View All Approvals
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/dashboard.js"></script>
</body>

</html>