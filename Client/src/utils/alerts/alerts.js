import Swal from 'sweetalert2'

export const alertLogError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Check your username or password',
      })
}
