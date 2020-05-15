using Microsoft.EntityFrameworkCore.Migrations;

namespace Zero.Data.Migrations
{
    public partial class FKs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_MaskLogs",
                table: "MaskLogs");

            migrationBuilder.RenameTable(
                name: "MaskLogs",
                newName: "MaskLog");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MaskLog",
                table: "MaskLog",
                column: "MaskLogId");

            migrationBuilder.CreateIndex(
                name: "IX_Sector_LocationId",
                table: "Sector",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_MaskLog_SectorId",
                table: "MaskLog",
                column: "SectorId");

            migrationBuilder.AddForeignKey(
                name: "FK_MaskLog_Sector_SectorId",
                table: "MaskLog",
                column: "SectorId",
                principalTable: "Sector",
                principalColumn: "SectorId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sector_Location_LocationId",
                table: "Sector",
                column: "LocationId",
                principalTable: "Location",
                principalColumn: "LocationId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MaskLog_Sector_SectorId",
                table: "MaskLog");

            migrationBuilder.DropForeignKey(
                name: "FK_Sector_Location_LocationId",
                table: "Sector");

            migrationBuilder.DropIndex(
                name: "IX_Sector_LocationId",
                table: "Sector");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MaskLog",
                table: "MaskLog");

            migrationBuilder.DropIndex(
                name: "IX_MaskLog_SectorId",
                table: "MaskLog");

            migrationBuilder.RenameTable(
                name: "MaskLog",
                newName: "MaskLogs");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MaskLogs",
                table: "MaskLogs",
                column: "MaskLogId");
        }
    }
}
