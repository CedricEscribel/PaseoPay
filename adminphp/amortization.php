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
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Amortization</h1>
        </div>

        <!-- Amortization Content -->
        <div class="card mb-4">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <i class="bi bi-house me-1"></i>
                House Monthly Amortization
              </div>
              <div>
                <button
                  class="btn btn-sm btn-success me-2"
                  id="export-amortization">
                  <i class="bi bi-file-earmark-excel me-1"></i>Export
                </button>
                <button
                  class="btn btn-sm btn-primary"
                  id="import-amortization">
                  <i class="bi bi-file-earmark-excel me-1"></i>Import
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search by name, block, or lot..." />
                <button class="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Block/Lot</th>
                    <th>Principal</th>
                    <th>Monthly Payment</th>
                    <th>Next Payment</th>
                    <th>Remaining Balance</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Franz Rance</td>
                    <td>Block 1, Lot 5</td>
                    <td>₱1,500,000</td>
                    <td>₱7,500</td>
                    <td>May 5, 2025</td>
                    <td>₱1,425,000</td>
                    <td><span class="badge bg-success">Current</span></td>
                    <td>
                      <button
                        class="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#amortizationModal">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Maria Garcia</td>
                    <td>Block 3, Lot 12</td>
                    <td>₱2,000,000</td>
                    <td>₱10,000</td>
                    <td>May 15, 2025</td>
                    <td>₱1,800,000</td>
                    <td><span class="badge bg-success">Current</span></td>
                    <td>
                      <button
                        class="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#amortizationModal">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Peter Santos</td>
                    <td>Block 2, Lot 8</td>
                    <td>₱1,800,000</td>
                    <td>₱9,000</td>
                    <td>April 25, 2025</td>
                    <td>₱1,700,000</td>
                    <td><span class="badge bg-danger">Overdue</span></td>
                    <td>
                      <button
                        class="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#amortizationModal">
                        View
                      </button>
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

  <!-- Amortization Detail Modal -->
  <div
    class="modal fade"
    id="amortizationModal"
    tabindex="-1"
    aria-labelledby="amortizationModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="amortizationModalLabel">
            Amortization Details - Franz Rance
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col-md-4">
              <p><strong>Principal:</strong> ₱1,500,000</p>
            </div>
            <div class="col-md-4">
              <p><strong>Term:</strong> 10 years</p>
            </div>
            <div class="col-md-4">
              <p><strong>Interest Rate:</strong> 6% annually</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <p><strong>Monthly Payment:</strong> ₱7,500</p>
            </div>
            <div class="col-md-4">
              <p><strong>Start Date:</strong> January 1, 2025</p>
            </div>
            <div class="col-md-4">
              <p><strong>Remaining Balance:</strong> ₱1,425,000</p>
            </div>
          </div>
          <hr />
          <h6>Amortization Schedule</h6>
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Date</th>
                  <th>Beginning Balance</th>
                  <th>Payment</th>
                  <th>Interest</th>
                  <th>Principal</th>
                  <th>Ending Balance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jan 1, 2025</td>
                  <td>₱1,500,000</td>
                  <td>₱7,500</td>
                  <td>₱7,500</td>
                  <td>₱0</td>
                  <td>₱1,500,000</td>
                  <td><span class="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Feb 1, 2025</td>
                  <td>₱1,500,000</td>
                  <td>₱7,500</td>
                  <td>₱7,500</td>
                  <td>₱0</td>
                  <td>₱1,500,000</td>
                  <td><span class="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mar 1, 2025</td>
                  <td>₱1,500,000</td>
                  <td>₱7,500</td>
                  <td>₱7,500</td>
                  <td>₱0</td>
                  <td>₱1,500,000</td>
                  <td><span class="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Apr 1, 2025</td>
                  <td>₱1,500,000</td>
                  <td>₱7,500</td>
                  <td>₱7,500</td>
                  <td>₱0</td>
                  <td>₱1,500,000</td>
                  <td><span class="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>May 1, 2025</td>
                  <td>₱1,500,000</td>
                  <td>₱7,500</td>
                  <td>₱7,500</td>
                  <td>₱0</td>
                  <td>₱1,500,000</td>
                  <td><span class="badge bg-warning">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-success">
            Record Payment
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Import File Modal -->
  <div
    class="modal fade"
    id="importModal"
    tabindex="-1"
    aria-labelledby="importModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="importModalLabel">Import Data</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="formFile" class="form-label">Select Excel File</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="alert alert-info">
            <small>
              <i class="bi bi-info-circle me-1"></i>
              Please ensure your Excel file follows the required format. You
              can download a template from the Settings page.
            </small>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">Import Data</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/amortization.js"></script>
</body>

</html>