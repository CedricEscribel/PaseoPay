<!DOCTYPE html>
<html lang="en">


<?php $pageTitle = "Settings"; ?>
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
                    <h1 class="h2">System Settings</h1> 
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <button type="button" class="btn btn-success" id="save-all-settings">
                                <i class="bi bi-check-circle me-1"></i>Save All Changes
                            </button>
                            <button type="button" class="btn btn-outline-secondary" id="reset-settings">
                                <i class="bi bi-arrow-clockwise me-1"></i>Reset to Default
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Settings Navigation Tabs -->
                <ul class="nav nav-tabs mb-4" id="settingsTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment-settings" type="button" role="tab">
                            <i class="bi bi-cash me-1"></i>Payment Settings
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="system-tab" data-bs-toggle="tab" data-bs-target="#system-settings" type="button" role="tab">
                            <i class="bi bi-gear me-1"></i>System Configuration
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="security-tab" data-bs-toggle="tab" data-bs-target="#security-settings" type="button" role="tab">
                            <i class="bi bi-shield-check me-1"></i>Security
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="logs-tab" data-bs-toggle="tab" data-bs-target="#admin-logs" type="button" role="tab">
                            <i class="bi bi-journal-text me-1"></i>Admin Logs
                        </button>
                    </li>
                </ul>

                <!-- Tab Content -->
                <div class="tab-content" id="settingsTabContent">
                    <!-- Payment Settings Tab -->
                    <div class="tab-pane fade show active" id="payment-settings" role="tabpanel">
                        <div class="row">
                            <!-- HOA Dues Settings -->
                            <div class="col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0">
                                            <i class="bi bi-cash me-2"></i>HOA Dues Configuration
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label for="hoa-monthly-rate" class="form-label">Monthly HOA Dues Rate</label>
                                            <div class="input-group">
                                                <span class="input-group-text">₱</span>
                                                <input type="number" class="form-control" id="hoa-monthly-rate" value="400" min="0" step="50">
                                                <span class="input-group-text">.00</span>
                                            </div>
                                            <div class="form-text">Standard monthly HOA dues for all homeowners</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="hoa-penalty-rate" class="form-label">Late Payment Penalty (%)</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control" id="hoa-penalty-rate" value="5" min="0" max="50" step="0.5">
                                                <span class="input-group-text">%</span>
                                            </div>
                                            <div class="form-text">Penalty percentage for late HOA dues payments</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="hoa-grace-period" class="form-label">Grace Period (Days)</label>
                                            <input type="number" class="form-control" id="hoa-grace-period" value="15" min="0" max="30">
                                            <div class="form-text">Days after due date before penalty applies</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="hoa-due-date" class="form-label">Monthly Due Date</label>
                                            <select class="form-select" id="hoa-due-date">
                                                <option value="1">1st of the month</option>
                                                <option value="5" selected>5th of the month</option>
                                                <option value="10">10th of the month</option>
                                                <option value="15">15th of the month</option>
                                                <option value="30">Last day of the month</option>
                                            </select>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="hoa-auto-generate" checked>
                                            <label class="form-check-label" for="hoa-auto-generate">
                                                Auto-generate monthly HOA dues
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Garbage Collection Settings -->
                            <div class="col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0">
                                            <i class="bi bi-trash me-2"></i>Garbage Collection Configuration
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label for="garbage-monthly-rate" class="form-label">Monthly Collection Fee</label>
                                            <div class="input-group">
                                                <span class="input-group-text">₱</span>
                                                <input type="number" class="form-control" id="garbage-monthly-rate" value="200" min="0" step="25">
                                                <span class="input-group-text">.00</span>
                                            </div>
                                            <div class="form-text">Monthly garbage collection fee per household</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="garbage-penalty-rate" class="form-label">Late Payment Penalty (%)</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control" id="garbage-penalty-rate" value="3" min="0" max="50" step="0.5">
                                                <span class="input-group-text">%</span>
                                            </div>
                                            <div class="form-text">Penalty percentage for late garbage collection payments</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="garbage-grace-period" class="form-label">Grace Period (Days)</label>
                                            <input type="number" class="form-control" id="garbage-grace-period" value="10" min="0" max="30">
                                            <div class="form-text">Days after due date before penalty applies</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="garbage-due-date" class="form-label">Monthly Due Date</label>
                                            <select class="form-select" id="garbage-due-date">
                                                <option value="1">1st of the month</option>
                                                <option value="5">5th of the month</option>
                                                <option value="10" selected>10th of the month</option>
                                                <option value="15">15th of the month</option>
                                                <option value="30">Last day of the month</option>
                                            </select>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="garbage-auto-generate" checked>
                                            <label class="form-check-label" for="garbage-auto-generate">
                                                Auto-generate monthly garbage collection fees
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- System Configuration Tab -->
                    <div class="tab-pane fade" id="system-settings" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0">
                                            <i class="bi bi-house me-2"></i>Community Information
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label for="community-name" class="form-label">Community Name</label>
                                            <input type="text" class="form-control" id="community-name" value="Paseo Verde Subdivision">
                                        </div>
                                        <div class="mb-3">
                                            <label for="community-address" class="form-label">Address</label>
                                            <textarea class="form-control" id="community-address" rows="3">123 Paseo Verde Street, Barangay San Jose, Quezon City, Metro Manila</textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="contact-number" class="form-label">Contact Number</label>
                                            <input type="text" class="form-control" id="contact-number" value="+63 2 8123 4567">
                                        </div>
                                        <div class="mb-3">
                                            <label for="contact-email" class="form-label">Contact Email</label>
                                            <input type="email" class="form-control" id="contact-email" value="admin@pasepay.com">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0">
                                            <i class="bi bi-clock me-2"></i>System Preferences
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label for="timezone" class="form-label">Timezone</label>
                                            <select class="form-select" id="timezone">
                                                <option value="Asia/Manila" selected>Asia/Manila (GMT+8)</option>
                                                <option value="UTC">UTC (GMT+0)</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="date-format" class="form-label">Date Format</label>
                                            <select class="form-select" id="date-format">
                                                <option value="MM/DD/YYYY" selected>MM/DD/YYYY</option>
                                                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="currency" class="form-label">Currency</label>
                                            <select class="form-select" id="currency">
                                                <option value="PHP" selected>Philippine Peso (₱)</option>
                                                <option value="USD">US Dollar ($)</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="session-timeout" class="form-label">Session Timeout (minutes)</label>
                                            <input type="number" class="form-control" id="session-timeout" value="30" min="5" max="480">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Data Management -->
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="mb-0">
                                    <i class="bi bi-database me-2"></i>Data Management
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <h6>Backup & Restore</h6>
                                        <button class="btn btn-primary btn-sm mb-2 w-100" id="backup-data">
                                            <i class="bi bi-download me-1"></i>Create Backup
                                        </button>
                                        <button class="btn btn-warning btn-sm mb-2 w-100" data-bs-toggle="modal" data-bs-target="#restoreModal">
                                            <i class="bi bi-upload me-1"></i>Restore Data
                                        </button>
                                        <div class="form-text">Last backup: Dec 6, 2024 10:30 AM</div>
                                    </div>
                                    <div class="col-md-4">
                                        <h6>Data Retention</h6>
                                        <div class="mb-2">
                                            <label for="log-retention" class="form-label">Keep logs for (days)</label>
                                            <input type="number" class="form-control" id="log-retention" value="90" min="30" max="365">
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="auto-cleanup" checked>
                                            <label class="form-check-label" for="auto-cleanup">Auto-cleanup old data</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <h6>System Maintenance</h6>
                                        <button class="btn btn-secondary btn-sm mb-2 w-100" id="clear-cache">
                                            <i class="bi bi-arrow-clockwise me-1"></i>Clear Cache
                                        </button>
                                        <button class="btn btn-info btn-sm mb-2 w-100" id="optimize-db">
                                            <i class="bi bi-gear me-1"></i>Optimize Database
                                        </button>
                                        <div class="form-text">Last optimization: Dec 5, 2024</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Security Settings Tab -->
                    <div class="tab-pane fade" id="security-settings" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0">
                                            <i class="bi bi-lock me-2"></i>Password Policy
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label for="min-password-length" class="form-label">Minimum Password Length</label>
                                            <input type="number" class="form-control" id="min-password-length" value="8" min="6" max="20">
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="require-uppercase" checked>
                                            <label class="form-check-label" for="require-uppercase">Require uppercase letters</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="require-lowercase" checked>
                                            <label class="form-check-label" for="require-lowercase">Require lowercase letters</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="require-numbers" checked>
                                            <label class="form-check-label" for="require-numbers">Require numbers</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="require-special">
                                            <label class="form-check-label" for="require-special">Require special characters</label>
                                        </div>
                                        <div class="mb-3 mt-3">
                                            <label for="password-expiry" class="form-label">Password Expiry (days)</label>
                                            <input type="number" class="form-control" id="password-expiry" value="90" min="30" max="365">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0">
                                            <i class="bi bi-shield-check me-2"></i>Access Control
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label for="max-login-attempts" class="form-label">Max Login Attempts</label>
                                            <input type="number" class="form-control" id="max-login-attempts" value="5" min="3" max="10">
                                        </div>
                                        <div class="mb-3">
                                            <label for="lockout-duration" class="form-label">Lockout Duration (minutes)</label>
                                            <input type="number" class="form-control" id="lockout-duration" value="15" min="5" max="60">
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="enable-2fa">
                                            <label class="form-check-label" for="enable-2fa">Enable Two-Factor Authentication</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="ip-whitelist">
                                            <label class="form-check-label" for="ip-whitelist">Enable IP Whitelisting</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="audit-trail" checked>
                                            <label class="form-check-label" for="audit-trail">Enable Audit Trail</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Admin Users Management -->
                        <div class="card mb-4">
                            <div class="card-header">
                                <h5 class="mb-0">
                                    <i class="bi bi-people me-2"></i>Admin Users Management
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h6>Current Admin Users</h6>
                                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addAdminModal">
                                        <i class="bi bi-plus me-1"></i>Add Admin
                                    </button>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Last Login</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Super Admin</td>
                                                <td>admin@paseopay.com</td>
                                                <td><span class="badge bg-danger">Super Admin</span></td>
                                                <td>Dec 6, 2024 2:30 PM</td>
                                                <td><span class="badge bg-success">Active</span></td>
                                                <td>
                                                    <button class="btn btn-sm btn-outline-secondary" disabled>
                                                        <i class="bi bi-pencil"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Manager</td>
                                                <td>john@paseopay.com</td>
                                                <td><span class="badge bg-warning">Manager</span></td>
                                                <td>Dec 5, 2024 4:15 PM</td>
                                                <td><span class="badge bg-success">Active</span></td>
                                                <td>
                                                    <button class="btn btn-sm btn-outline-primary" data-action="edit-admin">
                                                        <i class="bi bi-pencil"></i>
                                                    </button>
                                                    <button class="btn btn-sm btn-outline-danger" data-action="deactivate-admin">
                                                        <i class="bi bi-x"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Admin Logs Tab -->
                    <div class="tab-pane fade" id="admin-logs" role="tabpanel">
                        <div class="card">
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">
                                        <i class="bi bi-journal-text me-2"></i>Admin Action Logs
                                    </h5>
                                    <div class="d-flex gap-2">
                                        <select class="form-select form-select-sm" id="log-filter" style="width: auto;">
                                            <option value="all">All Actions</option>
                                            <option value="login">Login/Logout</option>
                                            <option value="payment">Payment Actions</option>
                                            <option value="user">User Management</option>
                                            <option value="settings">Settings Changes</option>
                                            <option value="announcement">Announcements</option>
                                        </select>
                                        <button class="btn btn-outline-secondary btn-sm" id="export-logs">
                                            <i class="bi bi-download me-1"></i>Export
                                        </button>
                                        <button class="btn btn-outline-danger btn-sm" id="clear-logs">
                                            <i class="bi bi-trash me-1"></i>Clear Old Logs
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search logs..." id="log-search">
                                        <button class="btn btn-outline-secondary" type="button">
                                            <i class="bi bi-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Timestamp</th>
                                                <th>Admin User</th>
                                                <th>Action</th>
                                                <th>Details</th>
                                                <th>IP Address</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="logs-table-body">
                                            <tr data-action="login">
                                                <td>Dec 6, 2024 2:30:15 PM</td>
                                                <td>admin@paseopay.com</td>
                                                <td><span class="badge bg-info">Login</span></td>
                                                <td>Successful admin login</td>
                                                <td>192.168.1.100</td>
                                                <td><span class="badge bg-success">Success</span></td>
                                            </tr>
                                            <tr data-action="settings">
                                                <td>Dec 6, 2024 2:25:42 PM</td>
                                                <td>admin@paseopay.com</td>
                                                <td><span class="badge bg-warning">Settings</span></td>
                                                <td>Updated HOA dues rate from ₱350 to ₱400</td>
                                                <td>192.168.1.100</td>
                                                <td><span class="badge bg-success">Success</span></td>
                                            </tr>
                                            <tr data-action="payment">
                                                <td>Dec 6, 2024 2:20:18 PM</td>
                                                <td>john@paseopay.com</td>
                                                <td><span class="badge bg-primary">Payment</span></td>
                                                <td>Approved payment for Carlos Rodriguez - HOA Dues ₱400</td>
                                                <td>192.168.1.105</td>
                                                <td><span class="badge bg-success">Success</span></td>
                                            </tr>
                                            <tr data-action="user">
                                                <td>Dec 6, 2024 2:15:33 PM</td>
                                                <td>admin@paseopay.com</td>
                                                <td><span class="badge bg-secondary">User Mgmt</span></td>
                                                <td>Approved homeowner registration for Ana Dela Cruz</td>
                                                <td>192.168.1.100</td>
                                                <td><span class="badge bg-success">Success</span></td>
                                            </tr>
                                            <tr data-action="announcement">
                                                <td>Dec 6, 2024 2:10:55 PM</td>
                                                <td>admin@paseopay.com</td>
                                                <td><span class="badge bg-danger">Announcement</span></td>
                                                <td>Published emergency announcement: Water Interruption Notice</td>
                                                <td>192.168.1.100</td>
                                                <td><span class="badge bg-success">Success</span></td>
                                            </tr>
                                            <tr data-action="login">
                                                <td>Dec 6, 2024 1:45:22 PM</td>
                                                <td>john@paseopay.com</td>
                                                <td><span class="badge bg-info">Login</span></td>
                                                <td>Successful admin login</td>
                                                <td>192.168.1.105</td>
                                                <td><span class="badge bg-success">Success</span></td>
                                            </tr>
                                            <tr data-action="settings">
                                                <td>Dec 6, 2024 1:30:10 PM</td>
                                                <td>admin@paseopay.com</td>
                                                <td><span class="badge bg-warning">Settings</span></td>
                                                <td>Updated garbage collection fee from ₱180 to ₱200</td>
                                                <td>192.168.1.100</td>
                                                <td><span class="badge bg-success">Success</span></td>
                                            </tr>
                                            <tr data-action="login">
                                                <td>Dec 6, 2024 12:15:45 PM</td>
                                                <td>invalid@email.com</td>
                                                <td><span class="badge bg-info">Login</span></td>
                                                <td>Failed login attempt - Invalid credentials</td>
                                                <td>203.177.45.123</td>
                                                <td><span class="badge bg-danger">Failed</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <nav aria-label="Logs pagination">
                                    <ul class="pagination pagination-sm justify-content-center">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <!-- Add Admin Modal -->
    <div class="modal fade" id="addAdminModal" tabindex="-1" aria-labelledby="addAdminModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addAdminModalLabel">Add New Admin User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="addAdminForm">
                        <div class="mb-3">
                            <label for="admin-name" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="admin-name" required>
                        </div>
                        <div class="mb-3">
                            <label for="admin-email" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="admin-email" required>
                        </div>
                        <div class="mb-3">
                            <label for="admin-role" class="form-label">Role</label>
                            <select class="form-select" id="admin-role" required>
                                <option value="">Select Role</option>
                                <option value="manager">Manager</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="admin-password" class="form-label">Temporary Password</label>
                            <input type="password" class="form-control" id="admin-password" required>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="force-password-change" checked>
                            <label class="form-check-label" for="force-password-change">
                                Force password change on first login
                            </label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="save-admin">Add Admin</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Restore Data Modal -->
    <div class="modal fade" id="restoreModal" tabindex="-1" aria-labelledby="restoreModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="restoreModalLabel">Restore Data from Backup</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning">
                        <i class="bi bi-exclamation-triangle me-2"></i>
                        <strong>Warning:</strong> Restoring data will overwrite all current data. This action cannot be undone.
                    </div>
                    <div class="mb-3">
                        <label for="backup-file" class="form-label">Select Backup File</label>
                        <input type="file" class="form-control" id="backup-file" accept=".sql,.zip">
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="confirm-restore">
                        <label class="form-check-label" for="confirm-restore">
                            I understand that this will overwrite all current data
                        </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" id="confirm-restore-btn" disabled>Restore Data</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/settings.js"></script>
</body>

</html>