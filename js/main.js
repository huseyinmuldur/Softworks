$(document).ready(function() {
    // Galeri resimleri için lightbox
    $('.galResim').click(function(e) {
        e.preventDefault();
        
        const imgSrc = $(this).attr('src');
        const modal = `
            <div class="modal fade" id="imageModal">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <img src="${imgSrc}" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(modal);
        $('#imageModal').modal('show');
        
        $('#imageModal').on('hidden.bs.modal', function() {
            $(this).remove();
        });
    });

    // Form validation
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const name = $('#name').val().trim();
        const surname = $('#surname').val().trim();
        const message = $('#message').val().trim();
        
        // Ad kontrolü
        if (!name) {
            $('#name').addClass('is-invalid');
            isValid = false;
        } else {
            $('#name').removeClass('is-invalid').addClass('is-valid');
        }
        
        // Soyad kontrolü
        if (!surname) {
            $('#surname').addClass('is-invalid');
            isValid = false;
        } else {
            $('#surname').removeClass('is-invalid').addClass('is-valid');
        }
        
        // Mesaj kontrolü
        if (!message) {
            $('#message').addClass('is-invalid');
            isValid = false;
        } else {
            $('#message').removeClass('is-invalid').addClass('is-valid');
        }
    });

    // Input'lara yazı yazılmaya başlandığında hata mesajını kaldır
    $('.form-control').on('input', function() {
        $(this).removeClass('is-invalid');
    });
}); 