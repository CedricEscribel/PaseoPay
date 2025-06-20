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
                    <h1 class="h2">Reports</h1>
                </div>

                <!-- Reports Content -->
                <div class="card mb-4">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-file-earmark-text me-1"></i>
                                Payment Reports
                            </div>
                            <div>
                                <button class="btn btn-sm btn-success me-2" id="export-report">
                                    <i class="bi bi-file-earmark-excel me-1"></i>Export
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <label for="report-type" class="form-label">Report Type</label>
                                <select class="form-select" id="report-type">
                                    <option selected>All Payments</option>
                                    <option>Amortization Payments</option>
                                    <option>HOA Dues</option>
                                    <option>Garbage Collection</option>
                                    <option>Overdue Payments</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="date-from" class="form-label">From Date</label>
                                <input type="date" class="form-control" id="date-from">
                            </div>
                            <div class="col-md-4">
                                <label for="date-to" class="form-label">To Date</label>
                                <input type="date" class="form-control" id="date-to">
                            </div>
                        </div>
                        <div class="mb-3">
                            <button class="btn btn-primary" id="generate-report">Generate Report</button>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Payment ID</th>
                                        <th>Homeowner</th>
                                        <th>Payment Type</th>
                                        <th>Amount</th>
                                        <th>Payment Date</th>
                                        <th>Payment Method</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>PAY-12345</td>
                                        <td>Franz Rance</td>
                                        <td>Amortization</td>
                                        <td>₱7,500</td>
                                        <td>Apr 5, 2025</td>
                                        <td>GCash</td>
                                        <td><span class="badge bg-success">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>PAY-12346</td>
                                        <td>Maria Garcia</td>
                                        <td>HOA Dues</td>
                                        <td>₱400</td>
                                        <td>Apr 3, 2025</td>
                                        <td>GCash</td>
                                        <td><span class="badge bg-success">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>PAY-12347</td>
                                        <td>Peter Santos</td>
                                        <td>Garbage Collection</td>
                                        <td>₱200</td>
                                        <td>Apr 2, 2025</td>
                                        <td>Walk-in</td>
                                        <td><span class="badge bg-success">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/reports.js"></script>
</body>

</html>