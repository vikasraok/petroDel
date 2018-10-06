class BookingModel {
  constructor(data) {
    this.meta = data.meta;
    this.bookings = data.orders;
  }
}

export default BookingModel;
