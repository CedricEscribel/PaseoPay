        <?php
        $current_page = basename($_SERVER['PHP_SELF']);
        ?>
        <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block sidebar">
            <div class="position-sticky pt-3">
                <div class="text-center mb-4">
                    <h4 class="text-white">PaseoPay</h4>
                    <p class="text-white-50">Admin Dashboard</p>
                </div>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'index.php') echo 'active'; ?>" href="index.php">
                            <i class="bi bi-speedometer2 me-2"></i>Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'amortization.php') echo 'active'; ?>" href="amortization.php">
                            <i class="bi bi-house me-2"></i>Amortization
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'hoa-dues.php') echo 'active'; ?>" href="hoa-dues.php">
                            <i class="bi bi-cash me-2"></i>HOA Dues
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'garbage-collection.php') echo 'active'; ?>" href="garbage-collection.php">
                            <i class="bi bi-trash me-2"></i>Garbage Collection
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'homeowners.php') echo 'active'; ?>" href="homeowners.php">
                            <i class="bi bi-people me-2"></i>Homeowners
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'homeowner-approvals.php') echo 'active'; ?>" href="homeowner-approvals.php">
                            <i class="bi bi-person-check me-2"></i>Approvals
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'announcements.php') echo 'active'; ?>" href="announcements.php">
                            <i class="bi bi-megaphone me-2"></i>Announcements
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'reports.php') echo 'active'; ?>" href="reports.php">
                            <i class="bi bi-file-earmark-text me-2"></i>Reports
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($current_page == 'settings.php') echo 'active'; ?>" href="settings.php">
                            <i class="bi bi-gear me-2"></i>Settings
                        </a>
                    </li>
                </ul>
            </div>
        </nav>