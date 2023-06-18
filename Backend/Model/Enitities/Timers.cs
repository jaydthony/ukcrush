namespace Model.Enitities
{
    public class Timers
    {
        public string Id { get; set; }
        public DateTime AvailableTime { get; set; }
        public bool IsTimeActive { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
