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
                    <h1 class="h2">Announcements</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#announcementModal" id="new-announcement-btn">
                                <i class="bi bi-plus-circle me-1"></i>New Announcement
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Summary Cards -->
                <div class="row mb-4">
                    <div class="col-md-3 mb-3">
                        <div class="card border-left-primary h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <div class="h6 mb-0 font-weight-bold text-primary">Total Announcements</div>
                                        <div class="h3 mt-2 stat-number2" id="total-announcements">8</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-megaphone icon-large2 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card border-left-success h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <div class="h6 mb-0 font-weight-bold text-success">Active</div>
                                        <div class="h3 mt-2 stat-number2" id="active-announcements">5</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-check-circle icon-large2 text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card border-left-warning h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <div class="h6 mb-0 font-weight-bold text-warning">Scheduled</div>
                                        <div class="h3 mt-2 stat-number2" id="scheduled-announcements">2</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-clock icon-large2 text-warning"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <div class="card border-left-secondary h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <div class="h6 mb-0 font-weight-bold text-secondary">Archived</div>
                                        <div class="h3 mt-2 stat-number2" id="archived-announcements">1</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-archive icon-large2 text-secondary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Filter and Search -->
                <div class="card mb-4">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <i class="bi bi-megaphone me-1"></i>
                                Manage Announcements
                            </div>
                            <div class="d-flex gap-2">
                                <select class="form-select form-select-sm" id="status-filter" style="width: auto;">
                                    <option value="all">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="scheduled">Scheduled</option>
                                    <option value="archived">Archived</option>
                                </select>
                                <select class="form-select form-select-sm" id="priority-filter" style="width: auto;">
                                    <option value="all">All Priority</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search announcements..." id="search-input">
                                <button class="btn btn-outline-secondary" type="button" id="search-btn">
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Priority</th>
                                        <th>Target Audience</th>
                                        <th>Created Date</th>
                                        <th>Publish Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-status="active" data-priority="high">
                                        <td>
                                            <div>
                                                <strong>Emergency Water Interruption Notice</strong>
                                                <div class="small text-muted">Water service will be temporarily interrupted...</div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-danger">Emergency</span></td>
                                        <td><span class="badge bg-danger">High</span></td>
                                        <td>All Residents</td>
                                        <td>Dec 6, 2024</td>
                                        <td>Dec 6, 2024</td>
                                        <td><span class="badge bg-success">Active</span></td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                                                    <i class="bi bi-eye"></i>
                                                </button>
                                                <button class="btn btn-sm btn-warning" data-action="edit" data-bs-toggle="modal" data-bs-target="#announcementModal">
                                                    <i class="bi bi-pencil"></i>
                                                </button>
                                                <button class="btn btn-sm btn-secondary" data-action="archive">
                                                    <i class="bi bi-archive"></i>
                                                </button>
                                                <button class="btn btn-sm btn-danger" data-action="delete">
                                                    <i class="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-status="active" data-priority="medium">
                                        <td>
                                            <div>
                                                <strong>Monthly HOA Meeting Reminder</strong>
                                                <div class="small text-muted">Join us for the monthly HOA meeting...</div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-info">Meeting</span></td>
                                        <td><span class="badge bg-warning">Medium</span></td>
                                        <td>All Homeowners</td>
                                        <td>Dec 5, 2024</td>
                                        <td>Dec 5, 2024</td>
                                        <td><span class="badge bg-success">Active</span></td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                                                    <i class="bi bi-eye"></i>
                                                </button>
                                                <button class="btn btn-sm btn-warning" data-action="edit" data-bs-toggle="modal" data-bs-target="#announcementModal">
                                                    <i class="bi bi-pencil"></i>
                                                </button>
                                                <button class="btn btn-sm btn-secondary" data-action="archive">
                                                    <i class="bi bi-archive"></i>
                                                </button>
                                                <button class="btn btn-sm btn-danger" data-action="delete">
                                                    <i class="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-status="scheduled" data-priority="low">
                                        <td>
                                            <div>
                                                <strong>Holiday Greetings</strong>
                                                <div class="small text-muted">Wishing everyone a happy holiday season...</div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-success">General</span></td>
                                        <td><span class="badge bg-secondary">Low</span></td>
                                        <td>All Residents</td>
                                        <td>Dec 4, 2024</td>
                                        <td>Dec 25, 2024</td>
                                        <td><span class="badge bg-warning">Scheduled</span></td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                                                    <i class="bi bi-eye"></i>
                                                </button>
                                                <button class="btn btn-sm btn-warning" data-action="edit" data-bs-toggle="modal" data-bs-target="#announcementModal">
                                                    <i class="bi bi-pencil"></i>
                                                </button>
                                                <button class="btn btn-sm btn-success" data-action="publish">
                                                    <i class="bi bi-send"></i>
                                                </button>
                                                <button class="btn btn-sm btn-danger" data-action="delete">
                                                    <i class="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-status="active" data-priority="medium">
                                        <td>
                                            <div>
                                                <strong>New Garbage Collection Schedule</strong>
                                                <div class="small text-muted">Updated schedule for waste collection...</div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-warning">Maintenance</span></td>
                                        <td><span class="badge bg-warning">Medium</span></td>
                                        <td>All Residents</td>
                                        <td>Dec 3, 2024</td>
                                        <td>Dec 3, 2024</td>
                                        <td><span class="badge bg-success">Active</span></td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                                                    <i class="bi bi-eye"></i>
                                                </button>
                                                <button class="btn btn-sm btn-warning" data-action="edit" data-bs-toggle="modal" data-bs-target="#announcementModal">
                                                    <i class="bi bi-pencil"></i>
                                                </button>
                                                <button class="btn btn-sm btn-secondary" data-action="archive">
                                                    <i class="bi bi-archive"></i>
                                                </button>
                                                <button class="btn btn-sm btn-danger" data-action="delete">
                                                    <i class="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-status="archived" data-priority="low" style="display: none;">
                                        <td>
                                            <div>
                                                <strong>Pool Maintenance Complete</strong>
                                                <div class="small text-muted">Swimming pool maintenance has been completed...</div>
                                            </div>
                                        </td>
                                        <td><span class="badge bg-warning">Maintenance</span></td>
                                        <td><span class="badge bg-secondary">Low</span></td>
                                        <td>All Residents</td>
                                        <td>Nov 28, 2024</td>
                                        <td>Nov 28, 2024</td>
                                        <td><span class="badge bg-secondary">Archived</span></td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                                                    <i class="bi bi-eye"></i>
                                                </button>
                                                <button class="btn btn-sm btn-success" data-action="restore">
                                                    <i class="bi bi-arrow-clockwise"></i>
                                                </button>
                                                <button class="btn btn-sm btn-danger" data-action="delete">
                                                    <i class="bi bi-trash"></i>
                                                </button>
                                            </div>
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

    <!-- Create/Edit Announcement Modal -->
    <div class="modal fade" id="announcementModal" tabindex="-1" aria-labelledby="announcementModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="announcementModalLabel">Create New Announcement</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="announcementForm">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="mb-3">
                                    <label for="announcement-title" class="form-label">Title <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="announcement-title" required>
                                </div>
                                <div class="mb-3">
                                    <label for="announcement-content" class="form-label">Content <span class="text-danger">*</span></label>
                                    <textarea class="form-control" id="announcement-content" rows="8" required placeholder="Enter the announcement content..."></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="announcement-category" class="form-label">Category</label>
                                            <select class="form-select" id="announcement-category">
                                                <option value="general">General</option>
                                                <option value="emergency">Emergency</option>
                                                <option value="meeting">Meeting</option>
                                                <option value="maintenance">Maintenance</option>
                                                <option value="event">Event</option>
                                                <option value="payment">Payment</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="announcement-priority" class="form-label">Priority</label>
                                            <select class="form-select" id="announcement-priority">
                                                <option value="low">Low</option>
                                                <option value="medium" selected>Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <label for="target-audience" class="form-label">Target Audience</label>
                                    <select class="form-select" id="target-audience">
                                        <option value="all-residents">All Residents</option>
                                        <option value="all-homeowners">All Homeowners</option>
                                        <option value="phase-1">Phase 1 Only</option>
                                        <option value="phase-2">Phase 2 Only</option>
                                        <option value="phase-3">Phase 3 Only</option>
                                        <option value="specific-blocks">Specific Blocks</option>
                                    </select>
                                </div>
                                <div class="mb-3" id="specific-blocks-container" style="display: none;">
                                    <label for="specific-blocks" class="form-label">Select Blocks</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="block-1" id="block-1">
                                        <label class="form-check-label" for="block-1">Block 1</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="block-2" id="block-2">
                                        <label class="form-check-label" for="block-2">Block 2</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="block-3" id="block-3">
                                        <label class="form-check-label" for="block-3">Block 3</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="block-4" id="block-4">
                                        <label class="form-check-label" for="block-4">Block 4</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="block-5" id="block-5">
                                        <label class="form-check-label" for="block-5">Block 5</label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="publish-date" class="form-label">Publish Date</label>
                                    <input type="datetime-local" class="form-control" id="publish-date">
                                    <div class="form-text">Leave empty to publish immediately</div>
                                </div>
                                <div class="mb-3">
                                    <label for="expiry-date" class="form-label">Expiry Date (Optional)</label>
                                    <input type="datetime-local" class="form-control" id="expiry-date">
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="send-email" checked>
                                        <label class="form-check-label" for="send-email">
                                            Send Email Notification
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="pin-announcement">
                                        <label class="form-check-label" for="pin-announcement">
                                            Pin to Top
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-outline-primary" id="save-draft-btn">
                        <i class="bi bi-file-earmark me-1"></i>Save as Draft
                    </button>
                    <button type="button" class="btn btn-primary" id="publish-announcement-btn">
                        <i class="bi bi-send me-1"></i>Publish Announcement
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- View Announcement Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewModalLabel">Announcement Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <h4 id="view-title">Emergency Water Interruption Notice</h4>
                        <div class="d-flex gap-2 mb-3">
                            <span class="badge bg-danger" id="view-category">Emergency</span>
                            <span class="badge bg-danger" id="view-priority">High</span>
                            <span class="badge bg-success" id="view-status">Active</span>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <strong>Target Audience:</strong>
                            <p id="view-audience">All Residents</p>
                        </div>
                        <div class="col-md-6">
                            <strong>Published:</strong>
                            <p id="view-publish-date">Dec 6, 2024 at 9:00 AM</p>
                        </div>
                    </div>
                    <div class="mb-3">
                        <strong>Content:</strong>
                        <div id="view-content" class="mt-2 p-3 bg-light rounded">
                            Water service will be temporarily interrupted on December 7, 2024, from 8:00 AM to 12:00 PM for emergency pipe repairs. Please store water in advance. We apologize for any inconvenience.
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <strong>Created by:</strong>
                            <p id="view-created-by">Admin User</p>
                        </div>
                        <div class="col-md-6">
                            <strong>Views:</strong>
                            <p id="view-count">45 views</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-warning" id="edit-from-view-btn">
                        <i class="bi bi-pencil me-1"></i>Edit
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/announcements.js"></script>
</body>

</html>