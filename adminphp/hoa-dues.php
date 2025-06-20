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
                    <h1 class="h2">HOA Dues</h1>
                </div>

                <!-- HOA Dues Content -->
                <div class="card mb-4">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-currency-dollar me-1"></i>
                                HOA Monthly Dues
                            </div>
                            <div>
                                <button class="btn btn-sm btn-success me-2" id="export-hoa">
                                    <i class="bi bi-file-earmark-excel me-1"></i>Export
                                </button>
                                <button class="btn btn-sm btn-primary" id="import-hoa">
                                    <i class="bi bi-file-earmark-excel me-1"></i>Import
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search by name, block, or lot...">
                                <button class="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Block/Lot</th>
                                        <th>Monthly Fee</th>
                                        <th>Last Payment</th>
                                        <th>Next Payment</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Franz Rance</td>
                                        <td>Block 1, Lot 5</td>
                                        <td>₱400</td>
                                        <td>April 1, 2025</td>
                                        <td>May 1, 2025</td>
                                        <td><span class="badge bg-success">Paid</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#hoaModal">View</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maria Garcia</td>
                                        <td>Block 3, Lot 12</td>
                                        <td>₱400</td>
                                        <td>April 1, 2025</td>
                                        <td>May 1, 2025</td>
                                        <td><span class="badge bg-success">Paid</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#hoaModal">View</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Peter Santos</td>
                                        <td>Block 2, Lot 8</td>
                                        <td>₱400</td>
                                        <td>March 1, 2025</td>
                                        <td>April 1, 2025</td>
                                        <td><span class="badge bg-danger">Overdue</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#hoaModal">View</button>
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

    <!-- HOA Dues Modal -->
    <div class="modal fade" id="hoaModal" tabindex="-1" aria-labelledby="hoaModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="hoaModalLabel">HOA Dues - Franz Rance</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <p><strong>Monthly Fee:</strong> ₱400</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Payment Schedule:</strong> Monthly</p>
                        </div>
                    </div>
                    <hr>
                    <h6>Payment History</h6>
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Amount</th>
                                    <th>Payment Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>January 2025</td>
                                    <td>₱400</td>
                                    <td>Jan 5, 2025</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>February 2025</td>
                                    <td>₱400</td>
                                    <td>Feb 3, 2025</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>March 2025</td>
                                    <td>₱400</td>
                                    <td>Mar 7, 2025</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>April 2025</td>
                                    <td>₱400</td>
                                    <td>Apr 1, 2025</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>May 2025</td>
                                    <td>₱400</td>
                                    <td>-</td>
                                    <td><span class="badge bg-warning">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">Record Payment</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Import File Modal -->
    <div class="modal fade" id="importModal" tabindex="-1" aria-labelledby="importModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="importModalLabel">Import Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Select Excel File</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>
                    <div class="alert alert-info">
                        <small>
                            <i class="bi bi-info-circle me-1"></i>
                            Please ensure your Excel file follows the required format. You can download a template from the Settings page.
                        </small>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Import Data</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/hoa-dues.js"></script>
</body>

</html>